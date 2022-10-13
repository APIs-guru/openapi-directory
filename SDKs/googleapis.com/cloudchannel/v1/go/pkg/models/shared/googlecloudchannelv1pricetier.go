package shared

type GoogleCloudChannelV1PriceTier struct {
	FirstResource *int32                     `json:"firstResource"`
	LastResource  *int32                     `json:"lastResource"`
	Price         *GoogleCloudChannelV1Price `json:"price"`
}
