package shared

type Presentation struct {
	AdditionalImageUrls []string `json:"additionalImageUrls"`
	DisplayImageURL     *string  `json:"displayImageUrl"`
	MediaUrls           []string `json:"mediaUrls"`
}
