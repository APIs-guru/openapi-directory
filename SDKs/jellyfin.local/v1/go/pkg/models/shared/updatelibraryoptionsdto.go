package shared

// UpdateLibraryOptionsDto
// Update library options dto.
type UpdateLibraryOptionsDto struct {
	ID             *string         `json:"Id,omitempty"`
	LibraryOptions *LibraryOptions `json:"LibraryOptions,omitempty"`
}
