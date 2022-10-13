package shared

type Image struct {
	AltText    *string          `json:"altText"`
	ContentURI *string          `json:"contentUri"`
	Properties *MediaProperties `json:"properties"`
	SourceURI  *string          `json:"sourceUri"`
}
