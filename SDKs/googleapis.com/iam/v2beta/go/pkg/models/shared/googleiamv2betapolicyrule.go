package shared

// GoogleIamV2betaPolicyRule
// A single rule in a `Policy`.
type GoogleIamV2betaPolicyRule struct {
	DenyRule    *GoogleIamV2betaDenyRule `json:"denyRule,omitempty"`
	Description *string                  `json:"description,omitempty"`
}
