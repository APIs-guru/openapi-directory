package shared

type Resource struct {
	DisplayName        *string  `json:"displayName"`
	Folders            []Folder `json:"folders"`
	Name               *string  `json:"name"`
	ParentDisplayName  *string  `json:"parentDisplayName"`
	ParentName         *string  `json:"parentName"`
	ProjectDisplayName *string  `json:"projectDisplayName"`
	ProjectName        *string  `json:"projectName"`
	Type               *string  `json:"type"`
}
