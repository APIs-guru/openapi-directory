package shared

type UpdateLibraryOptionsDto struct {
	ID             *string         `json:"Id,omitempty"`
	LibraryOptions *LibraryOptions `json:"LibraryOptions,omitempty"`
}
