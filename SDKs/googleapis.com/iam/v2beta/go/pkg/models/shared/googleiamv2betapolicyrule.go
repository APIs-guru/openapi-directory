package shared

type GoogleIamV2betaPolicyRule struct {
	DenyRule    *GoogleIamV2betaDenyRule `json:"denyRule,omitempty"`
	Description *string                  `json:"description,omitempty"`
}
