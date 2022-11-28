package operations

type GetFloatingIpsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetFloatingIpsID200ApplicationJSONFloatingIPDNSPtr struct {
	DNSPtr string `json:"dns_ptr"`
	IP     string `json:"ip"`
}

// GetFloatingIpsID200ApplicationJSONFloatingIPHomeLocation
// Location the Floating IP was created in. Routing is optimized for this Location.
type GetFloatingIpsID200ApplicationJSONFloatingIPHomeLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

// GetFloatingIpsID200ApplicationJSONFloatingIPProtection
// Protection configuration for the Resource
type GetFloatingIpsID200ApplicationJSONFloatingIPProtection struct {
	Delete bool `json:"delete"`
}

type GetFloatingIpsID200ApplicationJSONFloatingIPTypeEnum string

const (
	GetFloatingIpsID200ApplicationJSONFloatingIPTypeEnumIpv4 GetFloatingIpsID200ApplicationJSONFloatingIPTypeEnum = "ipv4"
	GetFloatingIpsID200ApplicationJSONFloatingIPTypeEnumIpv6 GetFloatingIpsID200ApplicationJSONFloatingIPTypeEnum = "ipv6"
)

type GetFloatingIpsID200ApplicationJSONFloatingIP struct {
	Blocked      bool                                                     `json:"blocked"`
	Created      string                                                   `json:"created"`
	Description  string                                                   `json:"description"`
	DNSPtr       []GetFloatingIpsID200ApplicationJSONFloatingIPDNSPtr     `json:"dns_ptr"`
	HomeLocation GetFloatingIpsID200ApplicationJSONFloatingIPHomeLocation `json:"home_location"`
	ID           int64                                                    `json:"id"`
	IP           string                                                   `json:"ip"`
	Labels       map[string]string                                        `json:"labels"`
	Name         string                                                   `json:"name"`
	Protection   GetFloatingIpsID200ApplicationJSONFloatingIPProtection   `json:"protection"`
	Server       int64                                                    `json:"server"`
	Type         GetFloatingIpsID200ApplicationJSONFloatingIPTypeEnum     `json:"type"`
}

type GetFloatingIpsID200ApplicationJSON struct {
	FloatingIP GetFloatingIpsID200ApplicationJSONFloatingIP `json:"floating_ip"`
}

type GetFloatingIpsIDRequest struct {
	PathParams GetFloatingIpsIDPathParams
}

type GetFloatingIpsIDResponse struct {
	ContentType                              string
	GetFloatingIpsID200ApplicationJSONObject *GetFloatingIpsID200ApplicationJSON
	StatusCode                               int64
}
