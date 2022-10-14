package shared

type SignInBehaviorRedirectConditionEnum string

const (
	SignInBehaviorRedirectConditionEnumRedirectConditionUnspecified SignInBehaviorRedirectConditionEnum = "REDIRECT_CONDITION_UNSPECIFIED"
	SignInBehaviorRedirectConditionEnumNever                        SignInBehaviorRedirectConditionEnum = "NEVER"
)

type SignInBehavior struct {
	RedirectCondition *SignInBehaviorRedirectConditionEnum `json:"redirectCondition,omitempty"`
}
