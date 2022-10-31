package shared

type ShippingShippingPricingModelEnum string

const (
	ShippingShippingPricingModelEnumFree     ShippingShippingPricingModelEnum = "FREE"
	ShippingShippingPricingModelEnumStandard ShippingShippingPricingModelEnum = "STANDARD"
)

type Shipping struct {
	ShippingPricingModel *ShippingShippingPricingModelEnum `json:"shippingPricingModel,omitempty"`
	Weight               *Weight                           `json:"weight,omitempty"`
	WeightInGrams        *int64                            `json:"weightInGrams,omitempty"`
}
