package shared

type ActionFunctionFunctionTypeEnum string

const (
	ActionFunctionFunctionTypeEnumPreActionExecution ActionFunctionFunctionTypeEnum = "PRE_ACTION_EXECUTION"
	ActionFunctionFunctionTypeEnumPreFetchOptions    ActionFunctionFunctionTypeEnum = "PRE_FETCH_OPTIONS"
	ActionFunctionFunctionTypeEnumPostFetchOptions   ActionFunctionFunctionTypeEnum = "POST_FETCH_OPTIONS"
)

type ActionFunction struct {
	FunctionSource string                         `json:"functionSource"`
	FunctionType   ActionFunctionFunctionTypeEnum `json:"functionType"`
	ID             *string                        `json:"id,omitempty"`
}
