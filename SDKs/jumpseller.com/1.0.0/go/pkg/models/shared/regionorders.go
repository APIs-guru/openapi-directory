package shared

type RegionOrders struct {
	City    *string `json:"city"`
	Code    *int64  `json:"code"`
	Country *int64  `json:"country"`
}
