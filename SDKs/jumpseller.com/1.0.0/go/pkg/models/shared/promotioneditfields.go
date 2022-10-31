package shared

type PromotionEditFields struct {
	BeginsAt              *string       `json:"begins_at,omitempty"`
	BuysAtLeast           *string       `json:"buys_at_least,omitempty"`
	Categories            []interface{} `json:"categories,omitempty"`
	Code                  *string       `json:"code,omitempty"`
	ConditionPrice        *float32      `json:"condition_price,omitempty"`
	ConditionQty          *int32        `json:"condition_qty,omitempty"`
	Cumulative            *bool         `json:"cumulative,omitempty"`
	CustomerCategories    []interface{} `json:"customer_categories,omitempty"`
	Customers             *string       `json:"customers,omitempty"`
	DiscountAmountFix     *float32      `json:"discount_amount_fix,omitempty"`
	DiscountAmountPercent *float32      `json:"discount_amount_percent,omitempty"`
	DiscountTarget        *string       `json:"discount_target,omitempty"`
	Enabled               *bool         `json:"enabled,omitempty"`
	ExpiresAt             *string       `json:"expires_at,omitempty"`
	Lasts                 *string       `json:"lasts,omitempty"`
	MaxTimesUsed          *int32        `json:"max_times_used,omitempty"`
	Name                  *string       `json:"name,omitempty"`
	Products              []interface{} `json:"products,omitempty"`
	ProductsX             []interface{} `json:"products_x,omitempty"`
	QuantityX             *int32        `json:"quantity_x,omitempty"`
	Type                  *string       `json:"type,omitempty"`
}
