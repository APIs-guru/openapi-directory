package shared

type EnterpriseCrmEventbusProtoErrorDetailSeverityEnum string

const (
	EnterpriseCrmEventbusProtoErrorDetailSeverityEnumSeverityUnspecified EnterpriseCrmEventbusProtoErrorDetailSeverityEnum = "SEVERITY_UNSPECIFIED"
	EnterpriseCrmEventbusProtoErrorDetailSeverityEnumError               EnterpriseCrmEventbusProtoErrorDetailSeverityEnum = "ERROR"
	EnterpriseCrmEventbusProtoErrorDetailSeverityEnumWarn                EnterpriseCrmEventbusProtoErrorDetailSeverityEnum = "WARN"
	EnterpriseCrmEventbusProtoErrorDetailSeverityEnumInfo                EnterpriseCrmEventbusProtoErrorDetailSeverityEnum = "INFO"
)

// EnterpriseCrmEventbusProtoErrorDetail
// An error, warning, or information message associated with a workflow.
type EnterpriseCrmEventbusProtoErrorDetail struct {
	ErrorCode    *CrmlogErrorCode                                   `json:"errorCode,omitempty"`
	ErrorMessage *string                                            `json:"errorMessage,omitempty"`
	Severity     *EnterpriseCrmEventbusProtoErrorDetailSeverityEnum `json:"severity,omitempty"`
	TaskNumber   *int32                                             `json:"taskNumber,omitempty"`
}
