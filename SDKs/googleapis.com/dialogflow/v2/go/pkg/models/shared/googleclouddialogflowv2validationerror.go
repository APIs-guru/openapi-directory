package shared

type GoogleCloudDialogflowV2ValidationErrorSeverityEnum string

const (
	GoogleCloudDialogflowV2ValidationErrorSeverityEnumSeverityUnspecified GoogleCloudDialogflowV2ValidationErrorSeverityEnum = "SEVERITY_UNSPECIFIED"
	GoogleCloudDialogflowV2ValidationErrorSeverityEnumInfo                GoogleCloudDialogflowV2ValidationErrorSeverityEnum = "INFO"
	GoogleCloudDialogflowV2ValidationErrorSeverityEnumWarning             GoogleCloudDialogflowV2ValidationErrorSeverityEnum = "WARNING"
	GoogleCloudDialogflowV2ValidationErrorSeverityEnumError               GoogleCloudDialogflowV2ValidationErrorSeverityEnum = "ERROR"
	GoogleCloudDialogflowV2ValidationErrorSeverityEnumCritical            GoogleCloudDialogflowV2ValidationErrorSeverityEnum = "CRITICAL"
)

type GoogleCloudDialogflowV2ValidationError struct {
	Entries      []string                                            `json:"entries"`
	ErrorMessage *string                                             `json:"errorMessage"`
	Severity     *GoogleCloudDialogflowV2ValidationErrorSeverityEnum `json:"severity"`
}
