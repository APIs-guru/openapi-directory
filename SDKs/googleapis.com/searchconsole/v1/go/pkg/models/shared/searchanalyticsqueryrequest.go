package shared

type SearchAnalyticsQueryRequestAggregationTypeEnum string

const (
	SearchAnalyticsQueryRequestAggregationTypeEnumAuto       SearchAnalyticsQueryRequestAggregationTypeEnum = "AUTO"
	SearchAnalyticsQueryRequestAggregationTypeEnumByProperty SearchAnalyticsQueryRequestAggregationTypeEnum = "BY_PROPERTY"
	SearchAnalyticsQueryRequestAggregationTypeEnumByPage     SearchAnalyticsQueryRequestAggregationTypeEnum = "BY_PAGE"
)

type SearchAnalyticsQueryRequestDataStateEnum string

const (
	SearchAnalyticsQueryRequestDataStateEnumDataStateUnspecified SearchAnalyticsQueryRequestDataStateEnum = "DATA_STATE_UNSPECIFIED"
	SearchAnalyticsQueryRequestDataStateEnumFinal                SearchAnalyticsQueryRequestDataStateEnum = "FINAL"
	SearchAnalyticsQueryRequestDataStateEnumAll                  SearchAnalyticsQueryRequestDataStateEnum = "ALL"
)

type SearchAnalyticsQueryRequestDimensionsEnum string

const (
	SearchAnalyticsQueryRequestDimensionsEnumDate             SearchAnalyticsQueryRequestDimensionsEnum = "DATE"
	SearchAnalyticsQueryRequestDimensionsEnumQuery            SearchAnalyticsQueryRequestDimensionsEnum = "QUERY"
	SearchAnalyticsQueryRequestDimensionsEnumPage             SearchAnalyticsQueryRequestDimensionsEnum = "PAGE"
	SearchAnalyticsQueryRequestDimensionsEnumCountry          SearchAnalyticsQueryRequestDimensionsEnum = "COUNTRY"
	SearchAnalyticsQueryRequestDimensionsEnumDevice           SearchAnalyticsQueryRequestDimensionsEnum = "DEVICE"
	SearchAnalyticsQueryRequestDimensionsEnumSearchAppearance SearchAnalyticsQueryRequestDimensionsEnum = "SEARCH_APPEARANCE"
)

type SearchAnalyticsQueryRequestSearchTypeEnum string

const (
	SearchAnalyticsQueryRequestSearchTypeEnumWeb        SearchAnalyticsQueryRequestSearchTypeEnum = "WEB"
	SearchAnalyticsQueryRequestSearchTypeEnumImage      SearchAnalyticsQueryRequestSearchTypeEnum = "IMAGE"
	SearchAnalyticsQueryRequestSearchTypeEnumVideo      SearchAnalyticsQueryRequestSearchTypeEnum = "VIDEO"
	SearchAnalyticsQueryRequestSearchTypeEnumNews       SearchAnalyticsQueryRequestSearchTypeEnum = "NEWS"
	SearchAnalyticsQueryRequestSearchTypeEnumDiscover   SearchAnalyticsQueryRequestSearchTypeEnum = "DISCOVER"
	SearchAnalyticsQueryRequestSearchTypeEnumGoogleNews SearchAnalyticsQueryRequestSearchTypeEnum = "GOOGLE_NEWS"
)

type SearchAnalyticsQueryRequestTypeEnum string

const (
	SearchAnalyticsQueryRequestTypeEnumWeb        SearchAnalyticsQueryRequestTypeEnum = "WEB"
	SearchAnalyticsQueryRequestTypeEnumImage      SearchAnalyticsQueryRequestTypeEnum = "IMAGE"
	SearchAnalyticsQueryRequestTypeEnumVideo      SearchAnalyticsQueryRequestTypeEnum = "VIDEO"
	SearchAnalyticsQueryRequestTypeEnumNews       SearchAnalyticsQueryRequestTypeEnum = "NEWS"
	SearchAnalyticsQueryRequestTypeEnumDiscover   SearchAnalyticsQueryRequestTypeEnum = "DISCOVER"
	SearchAnalyticsQueryRequestTypeEnumGoogleNews SearchAnalyticsQueryRequestTypeEnum = "GOOGLE_NEWS"
)

type SearchAnalyticsQueryRequest struct {
	AggregationType       *SearchAnalyticsQueryRequestAggregationTypeEnum `json:"aggregationType"`
	DataState             *SearchAnalyticsQueryRequestDataStateEnum       `json:"dataState"`
	DimensionFilterGroups []APIDimensionFilterGroup                       `json:"dimensionFilterGroups"`
	Dimensions            []SearchAnalyticsQueryRequestDimensionsEnum     `json:"dimensions"`
	EndDate               *string                                         `json:"endDate"`
	RowLimit              *int32                                          `json:"rowLimit"`
	SearchType            *SearchAnalyticsQueryRequestSearchTypeEnum      `json:"searchType"`
	StartDate             *string                                         `json:"startDate"`
	StartRow              *int32                                          `json:"startRow"`
	Type                  *SearchAnalyticsQueryRequestTypeEnum            `json:"type"`
}
