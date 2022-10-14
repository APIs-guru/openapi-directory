package shared

type Apk struct {
	Location    *FileReference `json:"location,omitempty"`
	PackageName *string        `json:"packageName,omitempty"`
}
