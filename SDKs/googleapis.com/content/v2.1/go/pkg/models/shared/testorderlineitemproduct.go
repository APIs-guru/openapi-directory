package shared



type TestOrderLineItemProduct struct {
    Brand *string `json:"brand,omitempty"`
    Condition *string `json:"condition,omitempty"`
    ContentLanguage *string `json:"contentLanguage,omitempty"`
    Fees []OrderLineItemProductFee `json:"fees,omitempty"`
    Gtin *string `json:"gtin,omitempty"`
    ImageLink *string `json:"imageLink,omitempty"`
    ItemGroupID *string `json:"itemGroupId,omitempty"`
    Mpn *string `json:"mpn,omitempty"`
    OfferID *string `json:"offerId,omitempty"`
    Price *Price `json:"price,omitempty"`
    TargetCountry *string `json:"targetCountry,omitempty"`
    Title *string `json:"title,omitempty"`
    VariantAttributes []OrderLineItemProductVariantAttribute `json:"variantAttributes,omitempty"`
    
}

