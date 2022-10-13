package shared

type AuthenticationFlowRepresentation struct {
	Alias                    *string                                       `json:"alias"`
	AuthenticationExecutions []AuthenticationExecutionExportRepresentation `json:"authenticationExecutions"`
	BuiltIn                  *bool                                         `json:"builtIn"`
	Description              *string                                       `json:"description"`
	ID                       *string                                       `json:"id"`
	ProviderID               *string                                       `json:"providerId"`
	TopLevel                 *bool                                         `json:"topLevel"`
}
