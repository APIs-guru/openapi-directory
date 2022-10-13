package shared

type AccountAutomaticImprovements struct {
	ImageImprovements    *AccountImageImprovements    `json:"imageImprovements"`
	ItemUpdates          *AccountItemUpdates          `json:"itemUpdates"`
	ShippingImprovements *AccountShippingImprovements `json:"shippingImprovements"`
}
