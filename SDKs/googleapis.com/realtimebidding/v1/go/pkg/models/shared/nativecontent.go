package shared

type NativeContent struct {
	AdvertiserName   *string  `json:"advertiserName"`
	AppIcon          *Image   `json:"appIcon"`
	Body             *string  `json:"body"`
	CallToAction     *string  `json:"callToAction"`
	ClickLinkURL     *string  `json:"clickLinkUrl"`
	ClickTrackingURL *string  `json:"clickTrackingUrl"`
	Headline         *string  `json:"headline"`
	Image            *Image   `json:"image"`
	Logo             *Image   `json:"logo"`
	PriceDisplayText *string  `json:"priceDisplayText"`
	StarRating       *float64 `json:"starRating"`
	VideoURL         *string  `json:"videoUrl"`
	VideoVastXML     *string  `json:"videoVastXml"`
}
