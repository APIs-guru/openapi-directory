package shared

// ConfigManagementPolicyController
// Configuration for Policy Controller
type ConfigManagementPolicyController struct {
	AuditIntervalSeconds     *string                                     `json:"auditIntervalSeconds,omitempty"`
	Enabled                  *bool                                       `json:"enabled,omitempty"`
	ExemptableNamespaces     []string                                    `json:"exemptableNamespaces,omitempty"`
	LogDeniesEnabled         *bool                                       `json:"logDeniesEnabled,omitempty"`
	Monitoring               *ConfigManagementPolicyControllerMonitoring `json:"monitoring,omitempty"`
	MutationEnabled          *bool                                       `json:"mutationEnabled,omitempty"`
	ReferentialRulesEnabled  *bool                                       `json:"referentialRulesEnabled,omitempty"`
	TemplateLibraryInstalled *bool                                       `json:"templateLibraryInstalled,omitempty"`
}
