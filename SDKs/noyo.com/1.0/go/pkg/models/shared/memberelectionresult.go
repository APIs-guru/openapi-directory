package shared

type MemberElectionResultMemberTypeEnum string

const (
	MemberElectionResultMemberTypeEnumDependent MemberElectionResultMemberTypeEnum = "dependent"
	MemberElectionResultMemberTypeEnumEmployee  MemberElectionResultMemberTypeEnum = "employee"
)

type MemberElectionResultStatusEnum string

const (
	MemberElectionResultStatusEnumEnrolling MemberElectionResultStatusEnum = "enrolling"
	MemberElectionResultStatusEnumWaiving   MemberElectionResultStatusEnum = "waiving"
)

type MemberElectionResult struct {
	Created    int64                              `json:"created"`
	ID         string                             `json:"id"`
	MemberID   string                             `json:"member_id"`
	MemberType MemberElectionResultMemberTypeEnum `json:"member_type"`
	Modified   int64                              `json:"modified"`
	PlanID     string                             `json:"plan_id"`
	Status     MemberElectionResultStatusEnum     `json:"status"`
	Version    string                             `json:"version"`
	Volume     *float64                           `json:"volume,omitempty"`
}
