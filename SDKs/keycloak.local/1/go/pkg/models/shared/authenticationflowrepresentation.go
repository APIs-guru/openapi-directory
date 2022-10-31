package shared

type AuthenticationFlowRepresentation struct {
	Alias                    *string                                       `json:"alias,omitempty"`
	AuthenticationExecutions []AuthenticationExecutionExportRepresentation `json:"authenticationExecutions,omitempty"`
	BuiltIn                  *bool                                         `json:"builtIn,omitempty"`
	Description              *string                                       `json:"description,omitempty"`
	ID                       *string                                       `json:"id,omitempty"`
	ProviderID               *string                                       `json:"providerId,omitempty"`
	TopLevel                 *bool                                         `json:"topLevel,omitempty"`
}
