package shared

type ConfigManagementPolicyController struct {
	AuditIntervalSeconds     *string                                     `json:"auditIntervalSeconds"`
	Enabled                  *bool                                       `json:"enabled"`
	ExemptableNamespaces     []string                                    `json:"exemptableNamespaces"`
	LogDeniesEnabled         *bool                                       `json:"logDeniesEnabled"`
	Monitoring               *ConfigManagementPolicyControllerMonitoring `json:"monitoring"`
	MutationEnabled          *bool                                       `json:"mutationEnabled"`
	ReferentialRulesEnabled  *bool                                       `json:"referentialRulesEnabled"`
	TemplateLibraryInstalled *bool                                       `json:"templateLibraryInstalled"`
}
