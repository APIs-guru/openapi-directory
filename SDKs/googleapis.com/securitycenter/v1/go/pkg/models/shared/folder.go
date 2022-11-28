package shared

// Folder
// Message that contains the resource name and display name of a folder resource.
type Folder struct {
	ResourceFolder            *string `json:"resourceFolder,omitempty"`
	ResourceFolderDisplayName *string `json:"resourceFolderDisplayName,omitempty"`
}
