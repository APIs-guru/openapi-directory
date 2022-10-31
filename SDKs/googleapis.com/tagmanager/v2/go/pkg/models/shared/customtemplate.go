package shared



type CustomTemplate struct {
    AccountID *string `json:"accountId,omitempty"`
    ContainerID *string `json:"containerId,omitempty"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    GalleryReference *GalleryReference `json:"galleryReference,omitempty"`
    Name *string `json:"name,omitempty"`
    Path *string `json:"path,omitempty"`
    TagManagerURL *string `json:"tagManagerUrl,omitempty"`
    TemplateData *string `json:"templateData,omitempty"`
    TemplateID *string `json:"templateId,omitempty"`
    WorkspaceID *string `json:"workspaceId,omitempty"`
    
}

