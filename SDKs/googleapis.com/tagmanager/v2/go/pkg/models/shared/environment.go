package shared




type EnvironmentTypeEnum string

const (
    EnvironmentTypeEnumUser EnvironmentTypeEnum = "user"
EnvironmentTypeEnumLive EnvironmentTypeEnum = "live"
EnvironmentTypeEnumLatest EnvironmentTypeEnum = "latest"
EnvironmentTypeEnumWorkspace EnvironmentTypeEnum = "workspace"
)


type Environment struct {
    AccountID *string `json:"accountId,omitempty"`
    AuthorizationCode *string `json:"authorizationCode,omitempty"`
    AuthorizationTimestamp *string `json:"authorizationTimestamp,omitempty"`
    ContainerID *string `json:"containerId,omitempty"`
    ContainerVersionID *string `json:"containerVersionId,omitempty"`
    Description *string `json:"description,omitempty"`
    EnableDebug *bool `json:"enableDebug,omitempty"`
    EnvironmentID *string `json:"environmentId,omitempty"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    Name *string `json:"name,omitempty"`
    Path *string `json:"path,omitempty"`
    TagManagerURL *string `json:"tagManagerUrl,omitempty"`
    Type *EnvironmentTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    WorkspaceID *string `json:"workspaceId,omitempty"`
    
}

