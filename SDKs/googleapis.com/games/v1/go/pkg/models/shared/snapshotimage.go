package shared

type SnapshotImage struct {
	Height   *int32  `json:"height,omitempty"`
	Kind     *string `json:"kind,omitempty"`
	MimeType *string `json:"mime_type,omitempty"`
	URL      *string `json:"url,omitempty"`
	Width    *int32  `json:"width,omitempty"`
}
