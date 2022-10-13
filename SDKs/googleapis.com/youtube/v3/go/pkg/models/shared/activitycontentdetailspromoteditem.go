package shared

type ActivityContentDetailsPromotedItemCtaTypeEnum string

const (
	ActivityContentDetailsPromotedItemCtaTypeEnumCtaTypeUnspecified  ActivityContentDetailsPromotedItemCtaTypeEnum = "ctaTypeUnspecified"
	ActivityContentDetailsPromotedItemCtaTypeEnumVisitAdvertiserSite ActivityContentDetailsPromotedItemCtaTypeEnum = "visitAdvertiserSite"
)

type ActivityContentDetailsPromotedItem struct {
	AdTag               *string                                        `json:"adTag"`
	ClickTrackingURL    *string                                        `json:"clickTrackingUrl"`
	CreativeViewURL     *string                                        `json:"creativeViewUrl"`
	CtaType             *ActivityContentDetailsPromotedItemCtaTypeEnum `json:"ctaType"`
	CustomCtaButtonText *string                                        `json:"customCtaButtonText"`
	DescriptionText     *string                                        `json:"descriptionText"`
	DestinationURL      *string                                        `json:"destinationUrl"`
	ForecastingURL      []string                                       `json:"forecastingUrl"`
	ImpressionURL       []string                                       `json:"impressionUrl"`
	VideoID             *string                                        `json:"videoId"`
}
