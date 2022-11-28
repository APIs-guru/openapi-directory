package shared

// ResultImage
// Image belonging to a custom search result.
type ResultImage struct {
	ByteSize        *int32  `json:"byteSize,omitempty"`
	ContextLink     *string `json:"contextLink,omitempty"`
	Height          *int32  `json:"height,omitempty"`
	ThumbnailHeight *int32  `json:"thumbnailHeight,omitempty"`
	ThumbnailLink   *string `json:"thumbnailLink,omitempty"`
	ThumbnailWidth  *int32  `json:"thumbnailWidth,omitempty"`
	Width           *int32  `json:"width,omitempty"`
}

// ResultLabels
// Refinement label associated with a custom search result.
type ResultLabels struct {
	DisplayName *string `json:"displayName,omitempty"`
	LabelWithOp *string `json:"label_with_op,omitempty"`
	Name        *string `json:"name,omitempty"`
}

// Result
// A custom search result.
type Result struct {
	CacheID          *string                `json:"cacheId,omitempty"`
	DisplayLink      *string                `json:"displayLink,omitempty"`
	FileFormat       *string                `json:"fileFormat,omitempty"`
	FormattedURL     *string                `json:"formattedUrl,omitempty"`
	HTMLFormattedURL *string                `json:"htmlFormattedUrl,omitempty"`
	HTMLSnippet      *string                `json:"htmlSnippet,omitempty"`
	HTMLTitle        *string                `json:"htmlTitle,omitempty"`
	Image            *ResultImage           `json:"image,omitempty"`
	Kind             *string                `json:"kind,omitempty"`
	Labels           []ResultLabels         `json:"labels,omitempty"`
	Link             *string                `json:"link,omitempty"`
	Mime             *string                `json:"mime,omitempty"`
	Pagemap          map[string]interface{} `json:"pagemap,omitempty"`
	Snippet          *string                `json:"snippet,omitempty"`
	Title            *string                `json:"title,omitempty"`
}
