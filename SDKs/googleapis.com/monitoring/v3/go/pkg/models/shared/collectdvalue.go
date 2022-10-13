package shared

type CollectdValueDataSourceTypeEnum string

const (
	CollectdValueDataSourceTypeEnumUnspecifiedDataSourceType CollectdValueDataSourceTypeEnum = "UNSPECIFIED_DATA_SOURCE_TYPE"
	CollectdValueDataSourceTypeEnumGauge                     CollectdValueDataSourceTypeEnum = "GAUGE"
	CollectdValueDataSourceTypeEnumCounter                   CollectdValueDataSourceTypeEnum = "COUNTER"
	CollectdValueDataSourceTypeEnumDerive                    CollectdValueDataSourceTypeEnum = "DERIVE"
	CollectdValueDataSourceTypeEnumAbsolute                  CollectdValueDataSourceTypeEnum = "ABSOLUTE"
)

type CollectdValue struct {
	DataSourceName *string                          `json:"dataSourceName"`
	DataSourceType *CollectdValueDataSourceTypeEnum `json:"dataSourceType"`
	Value          *TypedValue                      `json:"value"`
}
