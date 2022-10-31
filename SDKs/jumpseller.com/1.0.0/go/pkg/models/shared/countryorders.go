package shared



type CountryOrders struct {
    Code *string `json:"code,omitempty"`
    Count *int64 `json:"count,omitempty"`
    Country *string `json:"country,omitempty"`
    Orders []RegionOrders `json:"orders,omitempty"`
    
}

