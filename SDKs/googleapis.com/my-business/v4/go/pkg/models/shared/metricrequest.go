package shared

type MetricRequestMetricEnum string

const (
	MetricRequestMetricEnumMetricUnspecified            MetricRequestMetricEnum = "METRIC_UNSPECIFIED"
	MetricRequestMetricEnumAll                          MetricRequestMetricEnum = "ALL"
	MetricRequestMetricEnumQueriesDirect                MetricRequestMetricEnum = "QUERIES_DIRECT"
	MetricRequestMetricEnumQueriesIndirect              MetricRequestMetricEnum = "QUERIES_INDIRECT"
	MetricRequestMetricEnumQueriesChain                 MetricRequestMetricEnum = "QUERIES_CHAIN"
	MetricRequestMetricEnumViewsMaps                    MetricRequestMetricEnum = "VIEWS_MAPS"
	MetricRequestMetricEnumViewsSearch                  MetricRequestMetricEnum = "VIEWS_SEARCH"
	MetricRequestMetricEnumActionsWebsite               MetricRequestMetricEnum = "ACTIONS_WEBSITE"
	MetricRequestMetricEnumActionsPhone                 MetricRequestMetricEnum = "ACTIONS_PHONE"
	MetricRequestMetricEnumActionsDrivingDirections     MetricRequestMetricEnum = "ACTIONS_DRIVING_DIRECTIONS"
	MetricRequestMetricEnumPhotosViewsMerchant          MetricRequestMetricEnum = "PHOTOS_VIEWS_MERCHANT"
	MetricRequestMetricEnumPhotosViewsCustomers         MetricRequestMetricEnum = "PHOTOS_VIEWS_CUSTOMERS"
	MetricRequestMetricEnumPhotosCountMerchant          MetricRequestMetricEnum = "PHOTOS_COUNT_MERCHANT"
	MetricRequestMetricEnumPhotosCountCustomers         MetricRequestMetricEnum = "PHOTOS_COUNT_CUSTOMERS"
	MetricRequestMetricEnumLocalPostViewsSearch         MetricRequestMetricEnum = "LOCAL_POST_VIEWS_SEARCH"
	MetricRequestMetricEnumLocalPostActionsCallToAction MetricRequestMetricEnum = "LOCAL_POST_ACTIONS_CALL_TO_ACTION"
)

type MetricRequestOptionsEnum string

const (
	MetricRequestOptionsEnumMetricOptionUnspecified MetricRequestOptionsEnum = "METRIC_OPTION_UNSPECIFIED"
	MetricRequestOptionsEnumAggregatedTotal         MetricRequestOptionsEnum = "AGGREGATED_TOTAL"
	MetricRequestOptionsEnumAggregatedDaily         MetricRequestOptionsEnum = "AGGREGATED_DAILY"
	MetricRequestOptionsEnumBreakdownDayOfWeek      MetricRequestOptionsEnum = "BREAKDOWN_DAY_OF_WEEK"
	MetricRequestOptionsEnumBreakdownHourOfDay      MetricRequestOptionsEnum = "BREAKDOWN_HOUR_OF_DAY"
)

type MetricRequest struct {
	Metric  *MetricRequestMetricEnum   `json:"metric,omitempty"`
	Options []MetricRequestOptionsEnum `json:"options,omitempty"`
}
