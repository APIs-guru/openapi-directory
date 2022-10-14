package shared

type ObbFile struct {
	Obb         *FileReference `json:"obb,omitempty"`
	ObbFileName *string        `json:"obbFileName,omitempty"`
}
