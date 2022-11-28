package operations

type PostFloatingIpsCreateFloatingIPRequestTypeEnum string

const (
	PostFloatingIpsCreateFloatingIPRequestTypeEnumIpv4 PostFloatingIpsCreateFloatingIPRequestTypeEnum = "ipv4"
	PostFloatingIpsCreateFloatingIPRequestTypeEnumIpv6 PostFloatingIpsCreateFloatingIPRequestTypeEnum = "ipv6"
)

type PostFloatingIpsCreateFloatingIPRequest struct {
	Description  *string                                        `json:"description,omitempty"`
	HomeLocation *string                                        `json:"home_location,omitempty"`
	Labels       map[string]interface{}                         `json:"labels,omitempty"`
	Name         *string                                        `json:"name,omitempty"`
	Server       *int64                                         `json:"server,omitempty"`
	Type         PostFloatingIpsCreateFloatingIPRequestTypeEnum `json:"type"`
}

// PostFloatingIps201ApplicationJSONActionError
// Error message for the Action if error occurred, otherwise null
type PostFloatingIps201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFloatingIps201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFloatingIps201ApplicationJSONActionStatusEnum string

const (
	PostFloatingIps201ApplicationJSONActionStatusEnumSuccess PostFloatingIps201ApplicationJSONActionStatusEnum = "success"
	PostFloatingIps201ApplicationJSONActionStatusEnumRunning PostFloatingIps201ApplicationJSONActionStatusEnum = "running"
	PostFloatingIps201ApplicationJSONActionStatusEnumError   PostFloatingIps201ApplicationJSONActionStatusEnum = "error"
)

type PostFloatingIps201ApplicationJSONAction struct {
	Command   string                                             `json:"command"`
	Error     PostFloatingIps201ApplicationJSONActionError       `json:"error"`
	Finished  string                                             `json:"finished"`
	ID        int64                                              `json:"id"`
	Progress  float64                                            `json:"progress"`
	Resources []PostFloatingIps201ApplicationJSONActionResources `json:"resources"`
	Started   string                                             `json:"started"`
	Status    PostFloatingIps201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostFloatingIps201ApplicationJSONFloatingIPDNSPtr struct {
	DNSPtr string `json:"dns_ptr"`
	IP     string `json:"ip"`
}

// PostFloatingIps201ApplicationJSONFloatingIPHomeLocation
// Location the Floating IP was created in. Routing is optimized for this Location.
type PostFloatingIps201ApplicationJSONFloatingIPHomeLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

// PostFloatingIps201ApplicationJSONFloatingIPProtection
// Protection configuration for the Resource
type PostFloatingIps201ApplicationJSONFloatingIPProtection struct {
	Delete bool `json:"delete"`
}

type PostFloatingIps201ApplicationJSONFloatingIPTypeEnum string

const (
	PostFloatingIps201ApplicationJSONFloatingIPTypeEnumIpv4 PostFloatingIps201ApplicationJSONFloatingIPTypeEnum = "ipv4"
	PostFloatingIps201ApplicationJSONFloatingIPTypeEnumIpv6 PostFloatingIps201ApplicationJSONFloatingIPTypeEnum = "ipv6"
)

type PostFloatingIps201ApplicationJSONFloatingIP struct {
	Blocked      bool                                                    `json:"blocked"`
	Created      string                                                  `json:"created"`
	Description  string                                                  `json:"description"`
	DNSPtr       []PostFloatingIps201ApplicationJSONFloatingIPDNSPtr     `json:"dns_ptr"`
	HomeLocation PostFloatingIps201ApplicationJSONFloatingIPHomeLocation `json:"home_location"`
	ID           int64                                                   `json:"id"`
	IP           string                                                  `json:"ip"`
	Labels       map[string]string                                       `json:"labels"`
	Name         string                                                  `json:"name"`
	Protection   PostFloatingIps201ApplicationJSONFloatingIPProtection   `json:"protection"`
	Server       int64                                                   `json:"server"`
	Type         PostFloatingIps201ApplicationJSONFloatingIPTypeEnum     `json:"type"`
}

type PostFloatingIps201ApplicationJSON struct {
	Action     *PostFloatingIps201ApplicationJSONAction    `json:"action,omitempty"`
	FloatingIP PostFloatingIps201ApplicationJSONFloatingIP `json:"floating_ip"`
}

type PostFloatingIpsRequest struct {
	Request *PostFloatingIpsCreateFloatingIPRequest `request:"mediaType=application/json"`
}

type PostFloatingIpsResponse struct {
	ContentType                             string
	PostFloatingIps201ApplicationJSONObject *PostFloatingIps201ApplicationJSON
	StatusCode                              int64
}
