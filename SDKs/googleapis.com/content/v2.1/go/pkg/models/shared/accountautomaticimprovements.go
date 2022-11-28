package shared

// AccountAutomaticImprovementsInput
// The automatic improvements of the account can be used to automatically update items, improve images and shipping.
type AccountAutomaticImprovementsInput struct {
	ImageImprovements    *AccountImageImprovementsInput `json:"imageImprovements,omitempty"`
	ItemUpdates          *AccountItemUpdatesInput       `json:"itemUpdates,omitempty"`
	ShippingImprovements *AccountShippingImprovements   `json:"shippingImprovements,omitempty"`
}

// AccountAutomaticImprovements
// The automatic improvements of the account can be used to automatically update items, improve images and shipping.
type AccountAutomaticImprovements struct {
	ImageImprovements    *AccountImageImprovements    `json:"imageImprovements,omitempty"`
	ItemUpdates          *AccountItemUpdates          `json:"itemUpdates,omitempty"`
	ShippingImprovements *AccountShippingImprovements `json:"shippingImprovements,omitempty"`
}
