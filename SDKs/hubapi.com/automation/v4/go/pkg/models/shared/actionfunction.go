package shared

type ActionFunctionFunctionTypeEnum string

const (
	ActionFunctionFunctionTypeEnumPreActionExecution ActionFunctionFunctionTypeEnum = "PRE_ACTION_EXECUTION"
	ActionFunctionFunctionTypeEnumPreFetchOptions    ActionFunctionFunctionTypeEnum = "PRE_FETCH_OPTIONS"
	ActionFunctionFunctionTypeEnumPostFetchOptions   ActionFunctionFunctionTypeEnum = "POST_FETCH_OPTIONS"
)

// ActionFunction
// A serverless function associated with this custom workflow action.
type ActionFunction struct {
	FunctionSource string                         `json:"functionSource"`
	FunctionType   ActionFunctionFunctionTypeEnum `json:"functionType"`
	ID             *string                        `json:"id,omitempty"`
}
