package shared

type Form struct {
	FormURL      *string `json:"formUrl,omitempty"`
	ResponseURL  *string `json:"responseUrl,omitempty"`
	ThumbnailURL *string `json:"thumbnailUrl,omitempty"`
	Title        *string `json:"title,omitempty"`
}
