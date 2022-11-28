package shared

// CollectionFeaturedProduct
// The message for FeaturedProduct. [FeaturedProduct](https://support.google.com/merchants/answer/9703736)
type CollectionFeaturedProduct struct {
	OfferID *string  `json:"offerId,omitempty"`
	X       *float32 `json:"x,omitempty"`
	Y       *float32 `json:"y,omitempty"`
}
