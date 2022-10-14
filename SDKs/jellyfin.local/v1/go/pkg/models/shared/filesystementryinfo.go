package shared

type FileSystemEntryInfo struct {
	Name *string                  `json:"Name,omitempty"`
	Path *string                  `json:"Path,omitempty"`
	Type *FileSystemEntryTypeEnum `json:"Type,omitempty"`
}
