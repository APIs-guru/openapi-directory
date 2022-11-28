package shared

// Apk
// An Android package file to install.
type Apk struct {
	Location    *FileReference `json:"location,omitempty"`
	PackageName *string        `json:"packageName,omitempty"`
}
