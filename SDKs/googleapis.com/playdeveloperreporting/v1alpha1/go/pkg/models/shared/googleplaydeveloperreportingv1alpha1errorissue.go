package shared

type GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum string

const (
	GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnumErrorTypeUnspecified     GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum = "ERROR_TYPE_UNSPECIFIED"
	GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnumApplicationNotResponding GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum = "APPLICATION_NOT_RESPONDING"
	GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnumCrash                    GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum = "CRASH"
)

// GooglePlayDeveloperReportingV1alpha1ErrorIssue
// A group of related ErrorReports received for an app. Similar error reports are grouped together into issues with a likely identical root cause. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to different issues. This could also cause some issues disappearing entirely and being replaced by new ones. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
type GooglePlayDeveloperReportingV1alpha1ErrorIssue struct {
	Cause    *string                                                 `json:"cause,omitempty"`
	Location *string                                                 `json:"location,omitempty"`
	Name     *string                                                 `json:"name,omitempty"`
	Type     *GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum `json:"type,omitempty"`
}
