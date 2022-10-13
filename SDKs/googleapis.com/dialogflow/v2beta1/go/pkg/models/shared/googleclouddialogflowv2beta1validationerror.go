package shared

type GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnum string

const (
	GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnumSeverityUnspecified GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnum = "SEVERITY_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnumInfo                GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnum = "INFO"
	GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnumWarning             GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnum = "WARNING"
	GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnumError               GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnum = "ERROR"
	GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnumCritical            GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnum = "CRITICAL"
)

type GoogleCloudDialogflowV2beta1ValidationError struct {
	Entries      []string                                                 `json:"entries"`
	ErrorMessage *string                                                  `json:"errorMessage"`
	Severity     *GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnum `json:"severity"`
}
