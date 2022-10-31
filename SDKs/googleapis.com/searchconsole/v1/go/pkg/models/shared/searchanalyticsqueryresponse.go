package shared




type SearchAnalyticsQueryResponseResponseAggregationTypeEnum string

const (
    SearchAnalyticsQueryResponseResponseAggregationTypeEnumAuto SearchAnalyticsQueryResponseResponseAggregationTypeEnum = "AUTO"
SearchAnalyticsQueryResponseResponseAggregationTypeEnumByProperty SearchAnalyticsQueryResponseResponseAggregationTypeEnum = "BY_PROPERTY"
SearchAnalyticsQueryResponseResponseAggregationTypeEnumByPage SearchAnalyticsQueryResponseResponseAggregationTypeEnum = "BY_PAGE"
)


type SearchAnalyticsQueryResponse struct {
    ResponseAggregationType *SearchAnalyticsQueryResponseResponseAggregationTypeEnum `json:"responseAggregationType,omitempty"`
    Rows []APIDataRow `json:"rows,omitempty"`
    
}

