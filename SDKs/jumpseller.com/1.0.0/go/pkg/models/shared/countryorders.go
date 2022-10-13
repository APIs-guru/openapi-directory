package shared

type CountryOrders struct {
	Code    *string        `json:"code"`
	Count   *int64         `json:"count"`
	Country *string        `json:"country"`
	Orders  []RegionOrders `json:"orders"`
}
