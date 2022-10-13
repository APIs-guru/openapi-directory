package shared

type AuthenticationExecutionInfoRepresentation struct {
	Alias                *string  `json:"alias"`
	AuthenticationConfig *string  `json:"authenticationConfig"`
	AuthenticationFlow   *bool    `json:"authenticationFlow"`
	Configurable         *bool    `json:"configurable"`
	DisplayName          *string  `json:"displayName"`
	FlowID               *string  `json:"flowId"`
	ID                   *string  `json:"id"`
	Index                *int32   `json:"index"`
	Level                *int32   `json:"level"`
	ProviderID           *string  `json:"providerId"`
	Requirement          *string  `json:"requirement"`
	RequirementChoices   []string `json:"requirementChoices"`
}
