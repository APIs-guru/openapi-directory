package shared

type ContainerFeatures struct {
	SupportBuiltInVariables *bool `json:"supportBuiltInVariables,omitempty"`
	SupportClients          *bool `json:"supportClients,omitempty"`
	SupportEnvironments     *bool `json:"supportEnvironments,omitempty"`
	SupportFolders          *bool `json:"supportFolders,omitempty"`
	SupportGtagConfigs      *bool `json:"supportGtagConfigs,omitempty"`
	SupportTags             *bool `json:"supportTags,omitempty"`
	SupportTemplates        *bool `json:"supportTemplates,omitempty"`
	SupportTriggers         *bool `json:"supportTriggers,omitempty"`
	SupportUserPermissions  *bool `json:"supportUserPermissions,omitempty"`
	SupportVariables        *bool `json:"supportVariables,omitempty"`
	SupportVersions         *bool `json:"supportVersions,omitempty"`
	SupportWorkspaces       *bool `json:"supportWorkspaces,omitempty"`
	SupportZones            *bool `json:"supportZones,omitempty"`
}
