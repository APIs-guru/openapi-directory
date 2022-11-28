package shared

type EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum string

const (
	EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumDefaultInclusive EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum = "DEFAULT_INCLUSIVE"
	EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnumExclusive        EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum = "EXCLUSIVE"
)

// EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList
// List of error enums for alerts.
type EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList struct {
	EnumStrings []string                                                              `json:"enumStrings,omitempty"`
	FilterType  *EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum `json:"filterType,omitempty"`
}
