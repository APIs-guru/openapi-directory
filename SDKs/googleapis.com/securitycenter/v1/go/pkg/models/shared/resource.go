package shared

// Resource
// Information related to the Google Cloud resource that is associated with this finding.
type Resource struct {
	DisplayName        *string  `json:"displayName,omitempty"`
	Folders            []Folder `json:"folders,omitempty"`
	Name               *string  `json:"name,omitempty"`
	ParentDisplayName  *string  `json:"parentDisplayName,omitempty"`
	ParentName         *string  `json:"parentName,omitempty"`
	ProjectDisplayName *string  `json:"projectDisplayName,omitempty"`
	ProjectName        *string  `json:"projectName,omitempty"`
	Type               *string  `json:"type,omitempty"`
}
