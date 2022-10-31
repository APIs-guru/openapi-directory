package shared

type Asset struct {
	Content *string `json:"content,omitempty"`
	MediaID *string `json:"mediaId,omitempty"`
}
