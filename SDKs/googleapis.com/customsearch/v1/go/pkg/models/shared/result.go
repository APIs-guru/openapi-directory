package shared

type ResultImage struct {
	ByteSize        *int32  `json:"byteSize"`
	ContextLink     *string `json:"contextLink"`
	Height          *int32  `json:"height"`
	ThumbnailHeight *int32  `json:"thumbnailHeight"`
	ThumbnailLink   *string `json:"thumbnailLink"`
	ThumbnailWidth  *int32  `json:"thumbnailWidth"`
	Width           *int32  `json:"width"`
}

type ResultLabels struct {
	DisplayName *string `json:"displayName"`
	LabelWithOp *string `json:"label_with_op"`
	Name        *string `json:"name"`
}

type Result struct {
	CacheID          *string                `json:"cacheId"`
	DisplayLink      *string                `json:"displayLink"`
	FileFormat       *string                `json:"fileFormat"`
	FormattedURL     *string                `json:"formattedUrl"`
	HTMLFormattedURL *string                `json:"htmlFormattedUrl"`
	HTMLSnippet      *string                `json:"htmlSnippet"`
	HTMLTitle        *string                `json:"htmlTitle"`
	Image            *ResultImage           `json:"image"`
	Kind             *string                `json:"kind"`
	Labels           []ResultLabels         `json:"labels"`
	Link             *string                `json:"link"`
	Mime             *string                `json:"mime"`
	Pagemap          map[string]interface{} `json:"pagemap"`
	Snippet          *string                `json:"snippet"`
	Title            *string                `json:"title"`
}
