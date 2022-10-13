package shared

type RegularFile struct {
	Content    *FileReference `json:"content"`
	DevicePath *string        `json:"devicePath"`
}
