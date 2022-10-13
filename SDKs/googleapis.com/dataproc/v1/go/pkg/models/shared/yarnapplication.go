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
	Name        *string                   `json:"name"`
	Progress    *float32                  `json:"progress"`
	State       *YarnApplicationStateEnum `json:"state"`
	TrackingURL *string                   `json:"trackingUrl"`
}
