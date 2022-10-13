package shared

type Apk struct {
	Location    *FileReference `json:"location"`
	PackageName *string        `json:"packageName"`
}
