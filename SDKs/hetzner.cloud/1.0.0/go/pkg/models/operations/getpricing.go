package operations

type GetPricing200ApplicationJSONPricingFloatingIPPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

// GetPricing200ApplicationJSONPricingFloatingIP
// The cost of one Floating IP per month
type GetPricing200ApplicationJSONPricingFloatingIP struct {
	PriceMonthly GetPricing200ApplicationJSONPricingFloatingIPPriceMonthly `json:"price_monthly"`
}

// GetPricing200ApplicationJSONPricingFloatingIpsPricesPriceMonthly
// Monthly costs for a Floating IP type in this Location
type GetPricing200ApplicationJSONPricingFloatingIpsPricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetPricing200ApplicationJSONPricingFloatingIpsPrices struct {
	Location     string                                                           `json:"location"`
	PriceMonthly GetPricing200ApplicationJSONPricingFloatingIpsPricesPriceMonthly `json:"price_monthly"`
}

type GetPricing200ApplicationJSONPricingFloatingIpsTypeEnum string

const (
	GetPricing200ApplicationJSONPricingFloatingIpsTypeEnumIpv4 GetPricing200ApplicationJSONPricingFloatingIpsTypeEnum = "ipv4"
	GetPricing200ApplicationJSONPricingFloatingIpsTypeEnumIpv6 GetPricing200ApplicationJSONPricingFloatingIpsTypeEnum = "ipv6"
)

type GetPricing200ApplicationJSONPricingFloatingIps struct {
	Prices []GetPricing200ApplicationJSONPricingFloatingIpsPrices `json:"prices"`
	Type   GetPricing200ApplicationJSONPricingFloatingIpsTypeEnum `json:"type"`
}

type GetPricing200ApplicationJSONPricingImagePricePerGbMonth struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

// GetPricing200ApplicationJSONPricingImage
// The cost of Image per GB/month
type GetPricing200ApplicationJSONPricingImage struct {
	PricePerGbMonth GetPricing200ApplicationJSONPricingImagePricePerGbMonth `json:"price_per_gb_month"`
}

// GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceHourly
// Hourly costs for a Load Balancer type in this network zone
type GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

// GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceMonthly
// Monthly costs for a Load Balancer type in this network zone
type GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetPricing200ApplicationJSONPricingLoadBalancerTypesPrices struct {
	Location     string                                                                 `json:"location"`
	PriceHourly  GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceHourly  `json:"price_hourly"`
	PriceMonthly GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceMonthly `json:"price_monthly"`
}

type GetPricing200ApplicationJSONPricingLoadBalancerTypes struct {
	ID     float64                                                      `json:"id"`
	Name   string                                                       `json:"name"`
	Prices []GetPricing200ApplicationJSONPricingLoadBalancerTypesPrices `json:"prices"`
}

// GetPricing200ApplicationJSONPricingServerBackup
// Will increase base Server costs by specific percentage
type GetPricing200ApplicationJSONPricingServerBackup struct {
	Percentage string `json:"percentage"`
}

// GetPricing200ApplicationJSONPricingServerTypesPricesPriceHourly
// Hourly costs for a Server type in this Location
type GetPricing200ApplicationJSONPricingServerTypesPricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

// GetPricing200ApplicationJSONPricingServerTypesPricesPriceMonthly
// Monthly costs for a Server type in this Location
type GetPricing200ApplicationJSONPricingServerTypesPricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetPricing200ApplicationJSONPricingServerTypesPrices struct {
	Location     string                                                           `json:"location"`
	PriceHourly  GetPricing200ApplicationJSONPricingServerTypesPricesPriceHourly  `json:"price_hourly"`
	PriceMonthly GetPricing200ApplicationJSONPricingServerTypesPricesPriceMonthly `json:"price_monthly"`
}

type GetPricing200ApplicationJSONPricingServerTypes struct {
	ID     float64                                                `json:"id"`
	Name   string                                                 `json:"name"`
	Prices []GetPricing200ApplicationJSONPricingServerTypesPrices `json:"prices"`
}

type GetPricing200ApplicationJSONPricingTrafficPricePerTb struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

// GetPricing200ApplicationJSONPricingTraffic
// The cost of additional traffic per TB
type GetPricing200ApplicationJSONPricingTraffic struct {
	PricePerTb GetPricing200ApplicationJSONPricingTrafficPricePerTb `json:"price_per_tb"`
}

type GetPricing200ApplicationJSONPricingVolumePricePerGbMonth struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

// GetPricing200ApplicationJSONPricingVolume
// The cost of Volume per GB/month
type GetPricing200ApplicationJSONPricingVolume struct {
	PricePerGbMonth GetPricing200ApplicationJSONPricingVolumePricePerGbMonth `json:"price_per_gb_month"`
}

type GetPricing200ApplicationJSONPricing struct {
	Currency          string                                                 `json:"currency"`
	FloatingIP        GetPricing200ApplicationJSONPricingFloatingIP          `json:"floating_ip"`
	FloatingIps       []GetPricing200ApplicationJSONPricingFloatingIps       `json:"floating_ips"`
	Image             GetPricing200ApplicationJSONPricingImage               `json:"image"`
	LoadBalancerTypes []GetPricing200ApplicationJSONPricingLoadBalancerTypes `json:"load_balancer_types"`
	ServerBackup      GetPricing200ApplicationJSONPricingServerBackup        `json:"server_backup"`
	ServerTypes       []GetPricing200ApplicationJSONPricingServerTypes       `json:"server_types"`
	Traffic           GetPricing200ApplicationJSONPricingTraffic             `json:"traffic"`
	VatRate           string                                                 `json:"vat_rate"`
	Volume            GetPricing200ApplicationJSONPricingVolume              `json:"volume"`
}

type GetPricing200ApplicationJSON struct {
	Pricing GetPricing200ApplicationJSONPricing `json:"pricing"`
}

type GetPricingResponse struct {
	ContentType                        string
	GetPricing200ApplicationJSONObject *GetPricing200ApplicationJSON
	StatusCode                         int64
}
