package shared

// KeyToPath
// Maps a string key to a path within a volume.
type KeyToPath struct {
	Key  *string `json:"key,omitempty"`
	Mode *int32  `json:"mode,omitempty"`
	Path *string `json:"path,omitempty"`
}
