package shared

type OfferingMetadata struct {
	Category      *string  `json:"category"`
	Level         *string  `json:"level"`
	RootContentID *string  `json:"rootContentId"`
	Tags          []string `json:"tags"`
	Topic         *string  `json:"topic"`
}
