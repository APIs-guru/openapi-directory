package shared

type GoogleCloudFunctionsV2alphaStateMessageSeverityEnum string

const (
	GoogleCloudFunctionsV2alphaStateMessageSeverityEnumSeverityUnspecified GoogleCloudFunctionsV2alphaStateMessageSeverityEnum = "SEVERITY_UNSPECIFIED"
	GoogleCloudFunctionsV2alphaStateMessageSeverityEnumError               GoogleCloudFunctionsV2alphaStateMessageSeverityEnum = "ERROR"
	GoogleCloudFunctionsV2alphaStateMessageSeverityEnumWarning             GoogleCloudFunctionsV2alphaStateMessageSeverityEnum = "WARNING"
	GoogleCloudFunctionsV2alphaStateMessageSeverityEnumInfo                GoogleCloudFunctionsV2alphaStateMessageSeverityEnum = "INFO"
)

// GoogleCloudFunctionsV2alphaStateMessage
// Informational messages about the state of the Cloud Function or Operation.
type GoogleCloudFunctionsV2alphaStateMessage struct {
	Message  *string                                              `json:"message,omitempty"`
	Severity *GoogleCloudFunctionsV2alphaStateMessageSeverityEnum `json:"severity,omitempty"`
	Type     *string                                              `json:"type,omitempty"`
}
