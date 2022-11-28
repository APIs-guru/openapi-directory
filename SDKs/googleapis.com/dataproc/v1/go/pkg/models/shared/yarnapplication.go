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

// YarnApplication
// A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
type YarnApplication struct {
	Name        *string                   `json:"name,omitempty"`
	Progress    *float32                  `json:"progress,omitempty"`
	State       *YarnApplicationStateEnum `json:"state,omitempty"`
	TrackingURL *string                   `json:"trackingUrl,omitempty"`
}
