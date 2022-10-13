package shared

type IamBindingActionEnum string

const (
	IamBindingActionEnumActionUnspecified IamBindingActionEnum = "ACTION_UNSPECIFIED"
	IamBindingActionEnumAdd               IamBindingActionEnum = "ADD"
	IamBindingActionEnumRemove            IamBindingActionEnum = "REMOVE"
)

type IamBinding struct {
	Action *IamBindingActionEnum `json:"action"`
	Member *string               `json:"member"`
	Role   *string               `json:"role"`
}
