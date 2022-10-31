package shared




type StateHistoryStateEnum string

const (
    StateHistoryStateEnumStateUnspecified StateHistoryStateEnum = "STATE_UNSPECIFIED"
StateHistoryStateEnumCreated StateHistoryStateEnum = "CREATED"
StateHistoryStateEnumTurnedIn StateHistoryStateEnum = "TURNED_IN"
StateHistoryStateEnumReturned StateHistoryStateEnum = "RETURNED"
StateHistoryStateEnumReclaimedByStudent StateHistoryStateEnum = "RECLAIMED_BY_STUDENT"
StateHistoryStateEnumStudentEditedAfterTurnIn StateHistoryStateEnum = "STUDENT_EDITED_AFTER_TURN_IN"
)


type StateHistory struct {
    ActorUserID *string `json:"actorUserId,omitempty"`
    State *StateHistoryStateEnum `json:"state,omitempty"`
    StateTimestamp *string `json:"stateTimestamp,omitempty"`
    
}

