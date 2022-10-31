package shared



type StoreStatsConversions struct {
    AddedToCart *float32 `json:"added_to_cart,omitempty"`
    Checkout *float32 `json:"checkout,omitempty"`
    Paid *float32 `json:"paid,omitempty"`
    
}

type StoreStatsNewVsReturningCustomers struct {
    Global *int64 `json:"global,omitempty"`
    PerDay []NewVsReturning `json:"per_day,omitempty"`
    
}

type StoreStatsNewVsReturningOrders struct {
    Global *int64 `json:"global,omitempty"`
    PerDay []NewVsReturning `json:"per_day,omitempty"`
    
}

type StoreStatsOrders struct {
    Average *float32 `json:"average,omitempty"`
    Count *int64 `json:"count,omitempty"`
    Data []OrdersData `json:"data,omitempty"`
    Total *float32 `json:"total,omitempty"`
    
}

type StoreStatsRegionOrders struct {
    DisplayMode *string `json:"display_mode,omitempty"`
    RegionsOrders []CountryOrders `json:"regions_orders,omitempty"`
    
}

type StoreStats struct {
    BestSold []BestSold `json:"best_sold,omitempty"`
    Conversions *StoreStatsConversions `json:"conversions,omitempty"`
    Currency *string `json:"currency,omitempty"`
    DailyVisits []DailyVisits `json:"daily_visits,omitempty"`
    From *string `json:"from,omitempty"`
    NewVsReturningCustomers *StoreStatsNewVsReturningCustomers `json:"new_vs_returning_customers,omitempty"`
    NewVsReturningOrders *StoreStatsNewVsReturningOrders `json:"new_vs_returning_orders,omitempty"`
    Orders *StoreStatsOrders `json:"orders,omitempty"`
    PaymentMethods []PaymentMethodFreq `json:"payment_methods,omitempty"`
    Referrers []Referrer `json:"referrers,omitempty"`
    RegionOrders *StoreStatsRegionOrders `json:"region_orders,omitempty"`
    SearchFrequenciesAll []interface{} `json:"search_frequencies_all,omitempty"`
    SearchFrequenciesWithoutResults []interface{} `json:"search_frequencies_without_results,omitempty"`
    ShippingMethods []ShippingMethodFreq `json:"shipping_methods,omitempty"`
    To *string `json:"to,omitempty"`
    TrafficType []TrafficType `json:"traffic_type,omitempty"`
    Visits *int64 `json:"visits,omitempty"`
    
}

