package shared




type BuildApprovalStateEnum string

const (
    BuildApprovalStateEnumStateUnspecified BuildApprovalStateEnum = "STATE_UNSPECIFIED"
BuildApprovalStateEnumPending BuildApprovalStateEnum = "PENDING"
BuildApprovalStateEnumApproved BuildApprovalStateEnum = "APPROVED"
BuildApprovalStateEnumRejected BuildApprovalStateEnum = "REJECTED"
BuildApprovalStateEnumCancelled BuildApprovalStateEnum = "CANCELLED"
)


type BuildApproval struct {
    Config *ApprovalConfig `json:"config,omitempty"`
    Result *ApprovalResult `json:"result,omitempty"`
    State *BuildApprovalStateEnum `json:"state,omitempty"`
    
}

