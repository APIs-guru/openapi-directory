package shared

type ActionFunctionIdentifierFunctionTypeEnum string

const (
	ActionFunctionIdentifierFunctionTypeEnumPreActionExecution ActionFunctionIdentifierFunctionTypeEnum = "PRE_ACTION_EXECUTION"
	ActionFunctionIdentifierFunctionTypeEnumPreFetchOptions    ActionFunctionIdentifierFunctionTypeEnum = "PRE_FETCH_OPTIONS"
	ActionFunctionIdentifierFunctionTypeEnumPostFetchOptions   ActionFunctionIdentifierFunctionTypeEnum = "POST_FETCH_OPTIONS"
)

// ActionFunctionIdentifier
// A serverless function associated with this custom workflow action.
type ActionFunctionIdentifier struct {
	FunctionType ActionFunctionIdentifierFunctionTypeEnum `json:"functionType"`
	ID           *string                                  `json:"id,omitempty"`
}
