package shared

type EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum string

const (
	EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum = "DEFAULT_INCLUSIVE"
	EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive        EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum = "EXCLUSIVE"
)

type EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList struct {
	EnumStrings []string                                                              `json:"enumStrings,omitempty"`
	FilterType  *EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum `json:"filterType,omitempty"`
}
