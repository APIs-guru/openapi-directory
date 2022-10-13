package operations

type GetNamesNearOutputFormatEnum string

const (
	GetNamesNearOutputFormatEnumJSON GetNamesNearOutputFormatEnum = "json"
	GetNamesNearOutputFormatEnumXML  GetNamesNearOutputFormatEnum = "xml"
	GetNamesNearOutputFormatEnumKml  GetNamesNearOutputFormatEnum = "kml"
	GetNamesNearOutputFormatEnumCsv  GetNamesNearOutputFormatEnum = "csv"
)

type GetNamesNearOutputStyleEnum string

const (
	GetNamesNearOutputStyleEnumSummary GetNamesNearOutputStyleEnum = "summary"
	GetNamesNearOutputStyleEnumDetail  GetNamesNearOutputStyleEnum = "detail"
)

type GetNamesNearSortByEnum string

const (
	GetNamesNearSortByEnumName         GetNamesNearSortByEnum = "name"
	GetNamesNearSortByEnumFeatureType  GetNamesNearSortByEnum = "featureType"
	GetNamesNearSortByEnumDecisionDate GetNamesNearSortByEnum = "decisionDate"
)

type GetNamesNearQueryParams struct {
	Distance        string                       `queryParam:"style=form,explode=true,name=distance"`
	Embed           *int64                       `queryParam:"style=form,explode=true,name=embed"`
	FeatureCategory *string                      `queryParam:"style=form,explode=true,name=featureCategory"`
	FeatureClass    *string                      `queryParam:"style=form,explode=true,name=featureClass"`
	FeaturePoint    string                       `queryParam:"style=form,explode=true,name=featurePoint"`
	FeatureType     *string                      `queryParam:"style=form,explode=true,name=featureType"`
	ItemsPerPage    *int64                       `queryParam:"style=form,explode=true,name=itemsPerPage"`
	OutputFormat    GetNamesNearOutputFormatEnum `queryParam:"style=form,explode=true,name=outputFormat"`
	OutputSrs       *int64                       `queryParam:"style=form,explode=true,name=outputSRS"`
	OutputStyle     *GetNamesNearOutputStyleEnum `queryParam:"style=form,explode=true,name=outputStyle"`
	SortBy          *GetNamesNearSortByEnum      `queryParam:"style=form,explode=true,name=sortBy"`
	StartIndex      *int64                       `queryParam:"style=form,explode=true,name=startIndex"`
}

type GetNamesNearRequest struct {
	QueryParams GetNamesNearQueryParams
}

type GetNamesNearResponse struct {
	ContentType string
	StatusCode  int64
}
