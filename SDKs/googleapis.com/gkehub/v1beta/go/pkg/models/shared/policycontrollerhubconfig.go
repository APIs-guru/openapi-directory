package shared




type PolicyControllerHubConfigInstallSpecEnum string

const (
    PolicyControllerHubConfigInstallSpecEnumInstallSpecUnspecified PolicyControllerHubConfigInstallSpecEnum = "INSTALL_SPEC_UNSPECIFIED"
PolicyControllerHubConfigInstallSpecEnumInstallSpecNotInstalled PolicyControllerHubConfigInstallSpecEnum = "INSTALL_SPEC_NOT_INSTALLED"
PolicyControllerHubConfigInstallSpecEnumInstallSpecEnabled PolicyControllerHubConfigInstallSpecEnum = "INSTALL_SPEC_ENABLED"
PolicyControllerHubConfigInstallSpecEnumInstallSpecSuspended PolicyControllerHubConfigInstallSpecEnum = "INSTALL_SPEC_SUSPENDED"
)


type PolicyControllerHubConfig struct {
    AuditIntervalSeconds *string `json:"auditIntervalSeconds,omitempty"`
    ExemptableNamespaces []string `json:"exemptableNamespaces,omitempty"`
    InstallSpec *PolicyControllerHubConfigInstallSpecEnum `json:"installSpec,omitempty"`
    LogDeniesEnabled *bool `json:"logDeniesEnabled,omitempty"`
    Monitoring *PolicyControllerMonitoringConfig `json:"monitoring,omitempty"`
    MutationEnabled *bool `json:"mutationEnabled,omitempty"`
    ReferentialRulesEnabled *bool `json:"referentialRulesEnabled,omitempty"`
    TemplateLibraryConfig *PolicyControllerTemplateLibraryConfig `json:"templateLibraryConfig,omitempty"`
    
}

