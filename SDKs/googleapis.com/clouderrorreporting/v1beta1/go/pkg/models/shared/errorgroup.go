package shared

type ErrorGroupResolutionStatusEnum string

const (
	ErrorGroupResolutionStatusEnumResolutionStatusUnspecified ErrorGroupResolutionStatusEnum = "RESOLUTION_STATUS_UNSPECIFIED"
	ErrorGroupResolutionStatusEnumOpen                        ErrorGroupResolutionStatusEnum = "OPEN"
	ErrorGroupResolutionStatusEnumAcknowledged                ErrorGroupResolutionStatusEnum = "ACKNOWLEDGED"
	ErrorGroupResolutionStatusEnumResolved                    ErrorGroupResolutionStatusEnum = "RESOLVED"
	ErrorGroupResolutionStatusEnumMuted                       ErrorGroupResolutionStatusEnum = "MUTED"
)

type ErrorGroup struct {
	GroupID          *string                         `json:"groupId"`
	Name             *string                         `json:"name"`
	ResolutionStatus *ErrorGroupResolutionStatusEnum `json:"resolutionStatus"`
	TrackingIssues   []TrackingIssue                 `json:"trackingIssues"`
}
