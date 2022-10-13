package shared

type Form struct {
	FormURL      *string `json:"formUrl"`
	ResponseURL  *string `json:"responseUrl"`
	ThumbnailURL *string `json:"thumbnailUrl"`
	Title        *string `json:"title"`
}
