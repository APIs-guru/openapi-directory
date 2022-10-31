package shared

type RegionOrders struct {
	City    *string `json:"city,omitempty"`
	Code    *int64  `json:"code,omitempty"`
	Country *int64  `json:"country,omitempty"`
}
