package shared

// ChartGroupRule
// An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the aggregate_type.
type ChartGroupRule struct {
	DateTimeRule  *ChartDateTimeRule  `json:"dateTimeRule,omitempty"`
	HistogramRule *ChartHistogramRule `json:"histogramRule,omitempty"`
}
