package shared

type CollectdValueDataSourceTypeEnum string

const (
	CollectdValueDataSourceTypeEnumUnspecifiedDataSourceType CollectdValueDataSourceTypeEnum = "UNSPECIFIED_DATA_SOURCE_TYPE"
	CollectdValueDataSourceTypeEnumGauge                     CollectdValueDataSourceTypeEnum = "GAUGE"
	CollectdValueDataSourceTypeEnumCounter                   CollectdValueDataSourceTypeEnum = "COUNTER"
	CollectdValueDataSourceTypeEnumDerive                    CollectdValueDataSourceTypeEnum = "DERIVE"
	CollectdValueDataSourceTypeEnumAbsolute                  CollectdValueDataSourceTypeEnum = "ABSOLUTE"
)

// CollectdValue
// A single data point from a collectd-based plugin.
type CollectdValue struct {
	DataSourceName *string                          `json:"dataSourceName,omitempty"`
	DataSourceType *CollectdValueDataSourceTypeEnum `json:"dataSourceType,omitempty"`
	Value          *TypedValue                      `json:"value,omitempty"`
}
