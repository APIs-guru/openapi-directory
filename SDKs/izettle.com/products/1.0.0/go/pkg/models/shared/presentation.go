package shared

type Presentation struct {
	AdditionalImageUrls []string `json:"additionalImageUrls,omitempty"`
	DisplayImageURL     *string  `json:"displayImageUrl,omitempty"`
	MediaUrls           []string `json:"mediaUrls,omitempty"`
}
