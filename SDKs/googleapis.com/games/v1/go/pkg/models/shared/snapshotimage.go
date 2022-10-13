package shared

type SnapshotImage struct {
	Height   *int32  `json:"height"`
	Kind     *string `json:"kind"`
	MimeType *string `json:"mime_type"`
	URL      *string `json:"url"`
	Width    *int32  `json:"width"`
}
