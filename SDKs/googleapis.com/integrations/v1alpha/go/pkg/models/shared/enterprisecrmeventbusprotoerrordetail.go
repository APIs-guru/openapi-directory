package shared

type EnterpriseCrmEventbusProtoErrorDetailSeverityEnum string

const (
	EnterpriseCrmEventbusProtoErrorDetailSeverityEnumSeverityUnspecified EnterpriseCrmEventbusProtoErrorDetailSeverityEnum = "SEVERITY_UNSPECIFIED"
	EnterpriseCrmEventbusProtoErrorDetailSeverityEnumError               EnterpriseCrmEventbusProtoErrorDetailSeverityEnum = "ERROR"
	EnterpriseCrmEventbusProtoErrorDetailSeverityEnumWarn                EnterpriseCrmEventbusProtoErrorDetailSeverityEnum = "WARN"
	EnterpriseCrmEventbusProtoErrorDetailSeverityEnumInfo                EnterpriseCrmEventbusProtoErrorDetailSeverityEnum = "INFO"
)

type EnterpriseCrmEventbusProtoErrorDetail struct {
	ErrorCode    *CrmlogErrorCode                                   `json:"errorCode"`
	ErrorMessage *string                                            `json:"errorMessage"`
	Severity     *EnterpriseCrmEventbusProtoErrorDetailSeverityEnum `json:"severity"`
	TaskNumber   *int32                                             `json:"taskNumber"`
}
