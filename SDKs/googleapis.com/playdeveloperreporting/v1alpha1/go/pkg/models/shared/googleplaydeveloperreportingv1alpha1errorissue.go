package shared




type GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum string

const (
    GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnumErrorTypeUnspecified GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum = "ERROR_TYPE_UNSPECIFIED"
GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnumApplicationNotResponding GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum = "APPLICATION_NOT_RESPONDING"
GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnumCrash GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum = "CRASH"
)


type GooglePlayDeveloperReportingV1alpha1ErrorIssue struct {
    Cause *string `json:"cause,omitempty"`
    Location *string `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum `json:"type,omitempty"`
    
}

