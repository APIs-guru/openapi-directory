package shared

type ShippingShippingPricingModelEnum string

const (
	ShippingShippingPricingModelEnumFree     ShippingShippingPricingModelEnum = "FREE"
	ShippingShippingPricingModelEnumStandard ShippingShippingPricingModelEnum = "STANDARD"
)

type Shipping struct {
	ShippingPricingModel *ShippingShippingPricingModelEnum `json:"shippingPricingModel"`
	Weight               *Weight                           `json:"weight"`
	WeightInGrams        *int64                            `json:"weightInGrams"`
}
