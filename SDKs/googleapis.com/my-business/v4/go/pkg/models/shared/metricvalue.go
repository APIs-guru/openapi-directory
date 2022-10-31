package shared




type MetricValueMetricEnum string

const (
    MetricValueMetricEnumMetricUnspecified MetricValueMetricEnum = "METRIC_UNSPECIFIED"
MetricValueMetricEnumAll MetricValueMetricEnum = "ALL"
MetricValueMetricEnumQueriesDirect MetricValueMetricEnum = "QUERIES_DIRECT"
MetricValueMetricEnumQueriesIndirect MetricValueMetricEnum = "QUERIES_INDIRECT"
MetricValueMetricEnumQueriesChain MetricValueMetricEnum = "QUERIES_CHAIN"
MetricValueMetricEnumViewsMaps MetricValueMetricEnum = "VIEWS_MAPS"
MetricValueMetricEnumViewsSearch MetricValueMetricEnum = "VIEWS_SEARCH"
MetricValueMetricEnumActionsWebsite MetricValueMetricEnum = "ACTIONS_WEBSITE"
MetricValueMetricEnumActionsPhone MetricValueMetricEnum = "ACTIONS_PHONE"
MetricValueMetricEnumActionsDrivingDirections MetricValueMetricEnum = "ACTIONS_DRIVING_DIRECTIONS"
MetricValueMetricEnumPhotosViewsMerchant MetricValueMetricEnum = "PHOTOS_VIEWS_MERCHANT"
MetricValueMetricEnumPhotosViewsCustomers MetricValueMetricEnum = "PHOTOS_VIEWS_CUSTOMERS"
MetricValueMetricEnumPhotosCountMerchant MetricValueMetricEnum = "PHOTOS_COUNT_MERCHANT"
MetricValueMetricEnumPhotosCountCustomers MetricValueMetricEnum = "PHOTOS_COUNT_CUSTOMERS"
MetricValueMetricEnumLocalPostViewsSearch MetricValueMetricEnum = "LOCAL_POST_VIEWS_SEARCH"
MetricValueMetricEnumLocalPostActionsCallToAction MetricValueMetricEnum = "LOCAL_POST_ACTIONS_CALL_TO_ACTION"
)


type MetricValue struct {
    DimensionalValues []DimensionalMetricValue `json:"dimensionalValues,omitempty"`
    Metric *MetricValueMetricEnum `json:"metric,omitempty"`
    TotalValue *DimensionalMetricValue `json:"totalValue,omitempty"`
    
}

