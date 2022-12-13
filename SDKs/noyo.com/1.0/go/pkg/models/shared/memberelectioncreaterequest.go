package shared

type MemberElectionCreateRequestMemberTypeEnum string

const (
	MemberElectionCreateRequestMemberTypeEnumDependent MemberElectionCreateRequestMemberTypeEnum = "dependent"
	MemberElectionCreateRequestMemberTypeEnumEmployee  MemberElectionCreateRequestMemberTypeEnum = "employee"
)

type MemberElectionCreateRequestStatusEnum string

const (
	MemberElectionCreateRequestStatusEnumEnrolling MemberElectionCreateRequestStatusEnum = "enrolling"
	MemberElectionCreateRequestStatusEnumWaiving   MemberElectionCreateRequestStatusEnum = "waiving"
)

type MemberElectionCreateRequest struct {
	MemberID   string                                    `json:"member_id"`
	MemberType MemberElectionCreateRequestMemberTypeEnum `json:"member_type"`
	Status     MemberElectionCreateRequestStatusEnum     `json:"status"`
	Volume     *float64                                  `json:"volume,omitempty"`
}
