package shared

type InitiatorJoined struct {
	IsSystem *bool   `json:"isSystem"`
	MemberID *string `json:"member_id"`
	UserID   *string `json:"user_id"`
}

type Initiator struct {
	Joined *InitiatorJoined `json:"joined"`
}
