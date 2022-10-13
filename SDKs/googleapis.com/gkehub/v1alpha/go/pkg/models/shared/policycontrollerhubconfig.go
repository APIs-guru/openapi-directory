package shared

type PolicyControllerHubConfigInstallSpecEnum string

const (
	PolicyControllerHubConfigInstallSpecEnumInstallSpecUnspecified  PolicyControllerHubConfigInstallSpecEnum = "INSTALL_SPEC_UNSPECIFIED"
	PolicyControllerHubConfigInstallSpecEnumInstallSpecNotInstalled PolicyControllerHubConfigInstallSpecEnum = "INSTALL_SPEC_NOT_INSTALLED"
	PolicyControllerHubConfigInstallSpecEnumInstallSpecEnabled      PolicyControllerHubConfigInstallSpecEnum = "INSTALL_SPEC_ENABLED"
	PolicyControllerHubConfigInstallSpecEnumInstallSpecSuspended    PolicyControllerHubConfigInstallSpecEnum = "INSTALL_SPEC_SUSPENDED"
)

type PolicyControllerHubConfig struct {
	AuditIntervalSeconds    *string                                   `json:"auditIntervalSeconds"`
	ExemptableNamespaces    []string                                  `json:"exemptableNamespaces"`
	InstallSpec             *PolicyControllerHubConfigInstallSpecEnum `json:"installSpec"`
	LogDeniesEnabled        *bool                                     `json:"logDeniesEnabled"`
	Monitoring              *PolicyControllerMonitoringConfig         `json:"monitoring"`
	MutationEnabled         *bool                                     `json:"mutationEnabled"`
	ReferentialRulesEnabled *bool                                     `json:"referentialRulesEnabled"`
	TemplateLibraryConfig   *PolicyControllerTemplateLibraryConfig    `json:"templateLibraryConfig"`
}
