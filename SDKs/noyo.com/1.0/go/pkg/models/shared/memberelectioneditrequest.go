package shared

type MemberElectionEditRequestStatusEnum string

const (
	MemberElectionEditRequestStatusEnumEnrolling MemberElectionEditRequestStatusEnum = "enrolling"
	MemberElectionEditRequestStatusEnumWaiving   MemberElectionEditRequestStatusEnum = "waiving"
)

type MemberElectionEditRequest struct {
	PlanID *string                              `json:"plan_id,omitempty"`
	Status *MemberElectionEditRequestStatusEnum `json:"status,omitempty"`
	Volume *float64                             `json:"volume,omitempty"`
}
