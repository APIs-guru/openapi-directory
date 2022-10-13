package shared

type OrderLineItemProduct struct {
	Brand             *string                                `json:"brand"`
	Channel           *string                                `json:"channel"`
	Condition         *string                                `json:"condition"`
	ContentLanguage   *string                                `json:"contentLanguage"`
	Fees              []OrderLineItemProductFee              `json:"fees"`
	Gtin              *string                                `json:"gtin"`
	ID                *string                                `json:"id"`
	ImageLink         *string                                `json:"imageLink"`
	ItemGroupID       *string                                `json:"itemGroupId"`
	Mpn               *string                                `json:"mpn"`
	OfferID           *string                                `json:"offerId"`
	Price             *Price                                 `json:"price"`
	ShownImage        *string                                `json:"shownImage"`
	TargetCountry     *string                                `json:"targetCountry"`
	Title             *string                                `json:"title"`
	VariantAttributes []OrderLineItemProductVariantAttribute `json:"variantAttributes"`
}
