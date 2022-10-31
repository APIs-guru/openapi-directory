package shared




type IssueResolutionEnum string

const (
    IssueResolutionEnumResolutionUnspecified IssueResolutionEnum = "RESOLUTION_UNSPECIFIED"
IssueResolutionEnumUserAction IssueResolutionEnum = "USER_ACTION"
IssueResolutionEnumPendingProcessing IssueResolutionEnum = "PENDING_PROCESSING"
)



type IssueSeverityEnum string

const (
    IssueSeverityEnumSeverityUnspecified IssueSeverityEnum = "SEVERITY_UNSPECIFIED"
IssueSeverityEnumError IssueSeverityEnum = "ERROR"
IssueSeverityEnumWarning IssueSeverityEnum = "WARNING"
IssueSeverityEnumInfo IssueSeverityEnum = "INFO"
)


type Issue struct {
    Attribute *string `json:"attribute,omitempty"`
    Description *string `json:"description,omitempty"`
    Destination *string `json:"destination,omitempty"`
    Resolution *IssueResolutionEnum `json:"resolution,omitempty"`
    Severity *IssueSeverityEnum `json:"severity,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

