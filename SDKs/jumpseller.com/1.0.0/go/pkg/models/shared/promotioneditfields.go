package shared

type PromotionEditFields struct {
	BeginsAt              *string       `json:"begins_at"`
	BuysAtLeast           *string       `json:"buys_at_least"`
	Categories            []interface{} `json:"categories"`
	Code                  *string       `json:"code"`
	ConditionPrice        *float32      `json:"condition_price"`
	ConditionQty          *int32        `json:"condition_qty"`
	Cumulative            *bool         `json:"cumulative"`
	CustomerCategories    []interface{} `json:"customer_categories"`
	Customers             *string       `json:"customers"`
	DiscountAmountFix     *float32      `json:"discount_amount_fix"`
	DiscountAmountPercent *float32      `json:"discount_amount_percent"`
	DiscountTarget        *string       `json:"discount_target"`
	Enabled               *bool         `json:"enabled"`
	ExpiresAt             *string       `json:"expires_at"`
	Lasts                 *string       `json:"lasts"`
	MaxTimesUsed          *int32        `json:"max_times_used"`
	Name                  *string       `json:"name"`
	Products              []interface{} `json:"products"`
	ProductsX             []interface{} `json:"products_x"`
	QuantityX             *int32        `json:"quantity_x"`
	Type                  *string       `json:"type"`
}
