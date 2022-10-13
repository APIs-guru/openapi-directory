package shared

type UpdateLibraryOptionsDto struct {
	ID             *string         `json:"Id"`
	LibraryOptions *LibraryOptions `json:"LibraryOptions"`
}
