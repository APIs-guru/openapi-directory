package shared



type OrderLineItemProduct struct {
    Brand *string `json:"brand,omitempty"`
    Channel *string `json:"channel,omitempty"`
    Condition *string `json:"condition,omitempty"`
    ContentLanguage *string `json:"contentLanguage,omitempty"`
    Fees []OrderLineItemProductFee `json:"fees,omitempty"`
    Gtin *string `json:"gtin,omitempty"`
    ID *string `json:"id,omitempty"`
    ImageLink *string `json:"imageLink,omitempty"`
    ItemGroupID *string `json:"itemGroupId,omitempty"`
    Mpn *string `json:"mpn,omitempty"`
    OfferID *string `json:"offerId,omitempty"`
    Price *Price `json:"price,omitempty"`
    ShownImage *string `json:"shownImage,omitempty"`
    TargetCountry *string `json:"targetCountry,omitempty"`
    Title *string `json:"title,omitempty"`
    VariantAttributes []OrderLineItemProductVariantAttribute `json:"variantAttributes,omitempty"`
    
}

