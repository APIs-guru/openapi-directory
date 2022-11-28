package shared

type SetFindingStateRequestStateEnum string

const (
	SetFindingStateRequestStateEnumStateUnspecified SetFindingStateRequestStateEnum = "STATE_UNSPECIFIED"
	SetFindingStateRequestStateEnumActive           SetFindingStateRequestStateEnum = "ACTIVE"
	SetFindingStateRequestStateEnumInactive         SetFindingStateRequestStateEnum = "INACTIVE"
)

// SetFindingStateRequest
// Request message for updating a finding's state.
type SetFindingStateRequest struct {
	StartTime *string                          `json:"startTime,omitempty"`
	State     *SetFindingStateRequestStateEnum `json:"state,omitempty"`
}
