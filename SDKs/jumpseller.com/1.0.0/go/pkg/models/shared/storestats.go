package shared

type StoreStatsConversions struct {
	AddedToCart *float32 `json:"added_to_cart"`
	Checkout    *float32 `json:"checkout"`
	Paid        *float32 `json:"paid"`
}

type StoreStatsNewVsReturningCustomers struct {
	Global *int64           `json:"global"`
	PerDay []NewVsReturning `json:"per_day"`
}

type StoreStatsNewVsReturningOrders struct {
	Global *int64           `json:"global"`
	PerDay []NewVsReturning `json:"per_day"`
}

type StoreStatsOrders struct {
	Average *float32     `json:"average"`
	Count   *int64       `json:"count"`
	Data    []OrdersData `json:"data"`
	Total   *float32     `json:"total"`
}

type StoreStatsRegionOrders struct {
	DisplayMode   *string         `json:"display_mode"`
	RegionsOrders []CountryOrders `json:"regions_orders"`
}

type StoreStats struct {
	BestSold                        []BestSold                         `json:"best_sold"`
	Conversions                     *StoreStatsConversions             `json:"conversions"`
	Currency                        *string                            `json:"currency"`
	DailyVisits                     []DailyVisits                      `json:"daily_visits"`
	From                            *string                            `json:"from"`
	NewVsReturningCustomers         *StoreStatsNewVsReturningCustomers `json:"new_vs_returning_customers"`
	NewVsReturningOrders            *StoreStatsNewVsReturningOrders    `json:"new_vs_returning_orders"`
	Orders                          *StoreStatsOrders                  `json:"orders"`
	PaymentMethods                  []PaymentMethodFreq                `json:"payment_methods"`
	Referrers                       []Referrer                         `json:"referrers"`
	RegionOrders                    *StoreStatsRegionOrders            `json:"region_orders"`
	SearchFrequenciesAll            []interface{}                      `json:"search_frequencies_all"`
	SearchFrequenciesWithoutResults []interface{}                      `json:"search_frequencies_without_results"`
	ShippingMethods                 []ShippingMethodFreq               `json:"shipping_methods"`
	To                              *string                            `json:"to"`
	TrafficType                     []TrafficType                      `json:"traffic_type"`
	Visits                          *int64                             `json:"visits"`
}
