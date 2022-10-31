package shared

type YarnApplicationStateEnum string

const (
	YarnApplicationStateEnumStateUnspecified YarnApplicationStateEnum = "STATE_UNSPECIFIED"
	YarnApplicationStateEnumNew              YarnApplicationStateEnum = "NEW"
	YarnApplicationStateEnumNewSaving        YarnApplicationStateEnum = "NEW_SAVING"
	YarnApplicationStateEnumSubmitted        YarnApplicationStateEnum = "SUBMITTED"
	YarnApplicationStateEnumAccepted         YarnApplicationStateEnum = "ACCEPTED"
	YarnApplicationStateEnumRunning          YarnApplicationStateEnum = "RUNNING"
	YarnApplicationStateEnumFinished         YarnApplicationStateEnum = "FINISHED"
	YarnApplicationStateEnumFailed           YarnApplicationStateEnum = "FAILED"
	YarnApplicationStateEnumKilled           YarnApplicationStateEnum = "KILLED"
)

type YarnApplication struct {
	Name        *string                   `json:"name,omitempty"`
	Progress    *float32                  `json:"progress,omitempty"`
	State       *YarnApplicationStateEnum `json:"state,omitempty"`
	TrackingURL *string                   `json:"trackingUrl,omitempty"`
}
