package shared

// GoogleCloudRetailV2betaImage
// Product image. Recommendations AI and Retail Search do not use product images to improve prediction and search results. However, product images can be returned in results, and are shown in prediction or search previews in the console.
type GoogleCloudRetailV2betaImage struct {
	Height *int32  `json:"height,omitempty"`
	URI    *string `json:"uri,omitempty"`
	Width  *int32  `json:"width,omitempty"`
}
