package shared

type EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum string

const (
	EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum = "DEFAULT_INCLUSIVE"
	EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive        EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum = "EXCLUSIVE"
)

type EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList struct {
	EnumStrings []string                                                              `json:"enumStrings"`
	FilterType  *EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum `json:"filterType"`
}
