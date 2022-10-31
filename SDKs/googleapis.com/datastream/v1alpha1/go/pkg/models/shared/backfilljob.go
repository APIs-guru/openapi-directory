package shared




type BackfillJobStateEnum string

const (
    BackfillJobStateEnumStateUnspecified BackfillJobStateEnum = "STATE_UNSPECIFIED"
BackfillJobStateEnumNotStarted BackfillJobStateEnum = "NOT_STARTED"
BackfillJobStateEnumPending BackfillJobStateEnum = "PENDING"
BackfillJobStateEnumActive BackfillJobStateEnum = "ACTIVE"
BackfillJobStateEnumStopped BackfillJobStateEnum = "STOPPED"
BackfillJobStateEnumFailed BackfillJobStateEnum = "FAILED"
BackfillJobStateEnumCompleted BackfillJobStateEnum = "COMPLETED"
BackfillJobStateEnumUnsupported BackfillJobStateEnum = "UNSUPPORTED"
)



type BackfillJobTriggerEnum string

const (
    BackfillJobTriggerEnumTriggerUnspecified BackfillJobTriggerEnum = "TRIGGER_UNSPECIFIED"
BackfillJobTriggerEnumAutomatic BackfillJobTriggerEnum = "AUTOMATIC"
BackfillJobTriggerEnumManual BackfillJobTriggerEnum = "MANUAL"
)


type BackfillJob struct {
    Errors []Error `json:"errors,omitempty"`
    LastEndTime *string `json:"lastEndTime,omitempty"`
    LastStartTime *string `json:"lastStartTime,omitempty"`
    State *BackfillJobStateEnum `json:"state,omitempty"`
    Trigger *BackfillJobTriggerEnum `json:"trigger,omitempty"`
    
}

