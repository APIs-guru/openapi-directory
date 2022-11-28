package shared

type IamBindingActionEnum string

const (
	IamBindingActionEnumActionUnspecified IamBindingActionEnum = "ACTION_UNSPECIFIED"
	IamBindingActionEnumAdd               IamBindingActionEnum = "ADD"
	IamBindingActionEnumRemove            IamBindingActionEnum = "REMOVE"
)

// IamBinding
// Represents a particular IAM binding, which captures a member's role addition, removal, or state.
type IamBinding struct {
	Action *IamBindingActionEnum `json:"action,omitempty"`
	Member *string               `json:"member,omitempty"`
	Role   *string               `json:"role,omitempty"`
}
