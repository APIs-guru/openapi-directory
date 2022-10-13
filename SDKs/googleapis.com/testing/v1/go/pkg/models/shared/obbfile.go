package shared

type ObbFile struct {
	Obb         *FileReference `json:"obb"`
	ObbFileName *string        `json:"obbFileName"`
}
