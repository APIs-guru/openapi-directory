package shared



type Client struct {
    AccountID *string `json:"accountId,omitempty"`
    ClientID *string `json:"clientId,omitempty"`
    ContainerID *string `json:"containerId,omitempty"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Parameter []Parameter `json:"parameter,omitempty"`
    ParentFolderID *string `json:"parentFolderId,omitempty"`
    Path *string `json:"path,omitempty"`
    Priority *int32 `json:"priority,omitempty"`
    TagManagerURL *string `json:"tagManagerUrl,omitempty"`
    Type *string `json:"type,omitempty"`
    WorkspaceID *string `json:"workspaceId,omitempty"`
    
}

