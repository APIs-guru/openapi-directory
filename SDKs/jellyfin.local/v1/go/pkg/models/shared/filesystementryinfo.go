package shared

type FileSystemEntryInfo struct {
	Name *string                  `json:"Name"`
	Path *string                  `json:"Path"`
	Type *FileSystemEntryTypeEnum `json:"Type"`
}
