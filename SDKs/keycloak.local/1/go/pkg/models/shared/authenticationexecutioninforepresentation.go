package shared

type AuthenticationExecutionInfoRepresentation struct {
	Alias                *string  `json:"alias,omitempty"`
	AuthenticationConfig *string  `json:"authenticationConfig,omitempty"`
	AuthenticationFlow   *bool    `json:"authenticationFlow,omitempty"`
	Configurable         *bool    `json:"configurable,omitempty"`
	DisplayName          *string  `json:"displayName,omitempty"`
	FlowID               *string  `json:"flowId,omitempty"`
	ID                   *string  `json:"id,omitempty"`
	Index                *int32   `json:"index,omitempty"`
	Level                *int32   `json:"level,omitempty"`
	ProviderID           *string  `json:"providerId,omitempty"`
	Requirement          *string  `json:"requirement,omitempty"`
	RequirementChoices   []string `json:"requirementChoices,omitempty"`
}
