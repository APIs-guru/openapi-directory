package shared

type ProductViewAggregatedDestinationStatusEnum string

const (
	ProductViewAggregatedDestinationStatusEnumAggregatedStatusUnspecified ProductViewAggregatedDestinationStatusEnum = "AGGREGATED_STATUS_UNSPECIFIED"
	ProductViewAggregatedDestinationStatusEnumNotEligibleOrDisapproved    ProductViewAggregatedDestinationStatusEnum = "NOT_ELIGIBLE_OR_DISAPPROVED"
	ProductViewAggregatedDestinationStatusEnumPending                     ProductViewAggregatedDestinationStatusEnum = "PENDING"
	ProductViewAggregatedDestinationStatusEnumEligibleLimited             ProductViewAggregatedDestinationStatusEnum = "ELIGIBLE_LIMITED"
	ProductViewAggregatedDestinationStatusEnumEligible                    ProductViewAggregatedDestinationStatusEnum = "ELIGIBLE"
)

type ProductViewChannelEnum string

const (
	ProductViewChannelEnumChannelUnspecified ProductViewChannelEnum = "CHANNEL_UNSPECIFIED"
	ProductViewChannelEnumLocal              ProductViewChannelEnum = "LOCAL"
	ProductViewChannelEnumOnline             ProductViewChannelEnum = "ONLINE"
)

type ProductView struct {
	AggregatedDestinationStatus *ProductViewAggregatedDestinationStatusEnum `json:"aggregatedDestinationStatus"`
	Availability                *string                                     `json:"availability"`
	Brand                       *string                                     `json:"brand"`
	Channel                     *ProductViewChannelEnum                     `json:"channel"`
	Condition                   *string                                     `json:"condition"`
	CreationTime                *string                                     `json:"creationTime"`
	CurrencyCode                *string                                     `json:"currencyCode"`
	ExpirationDate              *Date                                       `json:"expirationDate"`
	Gtin                        []string                                    `json:"gtin"`
	ID                          *string                                     `json:"id"`
	ItemGroupID                 *string                                     `json:"itemGroupId"`
	ItemIssues                  []ProductViewItemIssue                      `json:"itemIssues"`
	LanguageCode                *string                                     `json:"languageCode"`
	OfferID                     *string                                     `json:"offerId"`
	PriceMicros                 *string                                     `json:"priceMicros"`
	ShippingLabel               *string                                     `json:"shippingLabel"`
	Title                       *string                                     `json:"title"`
}
