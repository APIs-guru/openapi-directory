package shared

type BackfillJobStateEnum string

const (
	BackfillJobStateEnumStateUnspecified BackfillJobStateEnum = "STATE_UNSPECIFIED"
	BackfillJobStateEnumNotStarted       BackfillJobStateEnum = "NOT_STARTED"
	BackfillJobStateEnumPending          BackfillJobStateEnum = "PENDING"
	BackfillJobStateEnumActive           BackfillJobStateEnum = "ACTIVE"
	BackfillJobStateEnumStopped          BackfillJobStateEnum = "STOPPED"
	BackfillJobStateEnumFailed           BackfillJobStateEnum = "FAILED"
	BackfillJobStateEnumCompleted        BackfillJobStateEnum = "COMPLETED"
	BackfillJobStateEnumUnsupported      BackfillJobStateEnum = "UNSUPPORTED"
)

type BackfillJobTriggerEnum string

const (
	BackfillJobTriggerEnumTriggerUnspecified BackfillJobTriggerEnum = "TRIGGER_UNSPECIFIED"
	BackfillJobTriggerEnumAutomatic          BackfillJobTriggerEnum = "AUTOMATIC"
	BackfillJobTriggerEnumManual             BackfillJobTriggerEnum = "MANUAL"
)

type BackfillJob struct {
	Errors        []Error                 `json:"errors"`
	LastEndTime   *string                 `json:"lastEndTime"`
	LastStartTime *string                 `json:"lastStartTime"`
	State         *BackfillJobStateEnum   `json:"state"`
	Trigger       *BackfillJobTriggerEnum `json:"trigger"`
}
