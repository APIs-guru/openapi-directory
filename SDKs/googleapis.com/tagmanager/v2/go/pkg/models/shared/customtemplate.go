package shared

type CustomTemplate struct {
	AccountID        *string           `json:"accountId"`
	ContainerID      *string           `json:"containerId"`
	Fingerprint      *string           `json:"fingerprint"`
	GalleryReference *GalleryReference `json:"galleryReference"`
	Name             *string           `json:"name"`
	Path             *string           `json:"path"`
	TagManagerURL    *string           `json:"tagManagerUrl"`
	TemplateData     *string           `json:"templateData"`
	TemplateID       *string           `json:"templateId"`
	WorkspaceID      *string           `json:"workspaceId"`
}
