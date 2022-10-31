package shared



type InitiatorJoined struct {
    IsSystem *bool `json:"isSystem,omitempty"`
    MemberID *string `json:"member_id,omitempty"`
    UserID *string `json:"user_id,omitempty"`
    
}

type Initiator struct {
    Joined *InitiatorJoined `json:"joined,omitempty"`
    
}

