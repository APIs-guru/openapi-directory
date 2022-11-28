package shared

type ErrorGroupResolutionStatusEnum string

const (
	ErrorGroupResolutionStatusEnumResolutionStatusUnspecified ErrorGroupResolutionStatusEnum = "RESOLUTION_STATUS_UNSPECIFIED"
	ErrorGroupResolutionStatusEnumOpen                        ErrorGroupResolutionStatusEnum = "OPEN"
	ErrorGroupResolutionStatusEnumAcknowledged                ErrorGroupResolutionStatusEnum = "ACKNOWLEDGED"
	ErrorGroupResolutionStatusEnumResolved                    ErrorGroupResolutionStatusEnum = "RESOLVED"
	ErrorGroupResolutionStatusEnumMuted                       ErrorGroupResolutionStatusEnum = "MUTED"
)

// ErrorGroup
// Description of a group of similar error events.
type ErrorGroup struct {
	GroupID          *string                         `json:"groupId,omitempty"`
	Name             *string                         `json:"name,omitempty"`
	ResolutionStatus *ErrorGroupResolutionStatusEnum `json:"resolutionStatus,omitempty"`
	TrackingIssues   []TrackingIssue                 `json:"trackingIssues,omitempty"`
}
