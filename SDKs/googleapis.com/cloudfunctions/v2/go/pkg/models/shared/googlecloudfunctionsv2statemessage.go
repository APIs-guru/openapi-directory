package shared

type GoogleCloudFunctionsV2StateMessageSeverityEnum string

const (
	GoogleCloudFunctionsV2StateMessageSeverityEnumSeverityUnspecified GoogleCloudFunctionsV2StateMessageSeverityEnum = "SEVERITY_UNSPECIFIED"
	GoogleCloudFunctionsV2StateMessageSeverityEnumError               GoogleCloudFunctionsV2StateMessageSeverityEnum = "ERROR"
	GoogleCloudFunctionsV2StateMessageSeverityEnumWarning             GoogleCloudFunctionsV2StateMessageSeverityEnum = "WARNING"
	GoogleCloudFunctionsV2StateMessageSeverityEnumInfo                GoogleCloudFunctionsV2StateMessageSeverityEnum = "INFO"
)

// GoogleCloudFunctionsV2StateMessage
// Informational messages about the state of the Cloud Function or Operation.
type GoogleCloudFunctionsV2StateMessage struct {
	Message  *string                                         `json:"message,omitempty"`
	Severity *GoogleCloudFunctionsV2StateMessageSeverityEnum `json:"severity,omitempty"`
	Type     *string                                         `json:"type,omitempty"`
}
