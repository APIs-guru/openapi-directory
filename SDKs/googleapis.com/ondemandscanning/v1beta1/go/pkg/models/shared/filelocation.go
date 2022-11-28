package shared

// FileLocation
// Indicates the location at which a package was found.
type FileLocation struct {
	FilePath *string `json:"filePath,omitempty"`
}
