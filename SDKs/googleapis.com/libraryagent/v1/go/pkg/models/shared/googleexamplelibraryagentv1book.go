package shared

// GoogleExampleLibraryagentV1Book
// A single book in the library.
type GoogleExampleLibraryagentV1Book struct {
	Author *string `json:"author,omitempty"`
	Name   *string `json:"name,omitempty"`
	Read   *bool   `json:"read,omitempty"`
	Title  *string `json:"title,omitempty"`
}
