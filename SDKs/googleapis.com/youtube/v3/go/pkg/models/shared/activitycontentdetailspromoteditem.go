package shared




type ActivityContentDetailsPromotedItemCtaTypeEnum string

const (
    ActivityContentDetailsPromotedItemCtaTypeEnumCtaTypeUnspecified ActivityContentDetailsPromotedItemCtaTypeEnum = "ctaTypeUnspecified"
ActivityContentDetailsPromotedItemCtaTypeEnumVisitAdvertiserSite ActivityContentDetailsPromotedItemCtaTypeEnum = "visitAdvertiserSite"
)


type ActivityContentDetailsPromotedItem struct {
    AdTag *string `json:"adTag,omitempty"`
    ClickTrackingURL *string `json:"clickTrackingUrl,omitempty"`
    CreativeViewURL *string `json:"creativeViewUrl,omitempty"`
    CtaType *ActivityContentDetailsPromotedItemCtaTypeEnum `json:"ctaType,omitempty"`
    CustomCtaButtonText *string `json:"customCtaButtonText,omitempty"`
    DescriptionText *string `json:"descriptionText,omitempty"`
    DestinationURL *string `json:"destinationUrl,omitempty"`
    ForecastingURL []string `json:"forecastingUrl,omitempty"`
    ImpressionURL []string `json:"impressionUrl,omitempty"`
    VideoID *string `json:"videoId,omitempty"`
    
}

