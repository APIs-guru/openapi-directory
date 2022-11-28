package shared

type GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum string

const (
	GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnumErrorTypeUnspecified     GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum = "ERROR_TYPE_UNSPECIFIED"
	GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnumApplicationNotResponding GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum = "APPLICATION_NOT_RESPONDING"
	GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnumCrash                    GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum = "CRASH"
)

// GooglePlayDeveloperReportingV1alpha1ErrorReport
// An error report received for an app. There reports are produced by the Android platform code when a (potentially fatal) error condition is detected. Identical reports from many users will be deduplicated and coalesced into a single ErrorReport. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
type GooglePlayDeveloperReportingV1alpha1ErrorReport struct {
	Issue      *string                                                  `json:"issue,omitempty"`
	Name       *string                                                  `json:"name,omitempty"`
	ReportText *string                                                  `json:"reportText,omitempty"`
	Type       *GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum `json:"type,omitempty"`
}
