package shared



type AccountAutomaticImprovements struct {
    ImageImprovements *AccountImageImprovements `json:"imageImprovements,omitempty"`
    ItemUpdates *AccountItemUpdates `json:"itemUpdates,omitempty"`
    ShippingImprovements *AccountShippingImprovements `json:"shippingImprovements,omitempty"`
    
}

