package shared

type GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum string

const (
	GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnumErrorTypeUnspecified     GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum = "ERROR_TYPE_UNSPECIFIED"
	GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnumApplicationNotResponding GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum = "APPLICATION_NOT_RESPONDING"
	GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnumCrash                    GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum = "CRASH"
)

type GooglePlayDeveloperReportingV1alpha1ErrorReport struct {
	Issue      *string                                                  `json:"issue"`
	Name       *string                                                  `json:"name"`
	ReportText *string                                                  `json:"reportText"`
	Type       *GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum `json:"type"`
}
