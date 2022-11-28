package operations

type PutLoadBalancersIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutLoadBalancersIDRequestBody struct {
	Labels map[string]interface{} `json:"labels,omitempty"`
	Name   *string                `json:"name,omitempty"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum string

const (
	PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnumRoundRobin       PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum = "round_robin"
	PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnumLeastConnections PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum = "least_connections"
)

// PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm
// Algorithm of the Load Balancer
type PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm struct {
	Type PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum `json:"type"`
}

// PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly
// Hourly costs for a Resource in this Location
type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

// PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly
// Monthly costs for a Resource in this Location
type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePrices struct {
	Location     string                                                                             `json:"location"`
	PriceHourly  PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly  `json:"price_hourly"`
	PriceMonthly PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly `json:"price_monthly"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerType struct {
	Deprecated              string                                                                   `json:"deprecated"`
	Description             string                                                                   `json:"description"`
	ID                      float64                                                                  `json:"id"`
	MaxAssignedCertificates float64                                                                  `json:"max_assigned_certificates"`
	MaxConnections          float64                                                                  `json:"max_connections"`
	MaxServices             float64                                                                  `json:"max_services"`
	MaxTargets              float64                                                                  `json:"max_targets"`
	Name                    string                                                                   `json:"name"`
	Prices                  []PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePrices `json:"prices"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerPrivateNet struct {
	IP      *string `json:"ip,omitempty"`
	Network *int64  `json:"network,omitempty"`
}

// PutLoadBalancersID200ApplicationJSONLoadBalancerProtection
// Protection configuration for the Resource
type PutLoadBalancersID200ApplicationJSONLoadBalancerProtection struct {
	Delete bool `json:"delete"`
}

// PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4
// IP address (v4)
type PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4 struct {
	DNSPtr *string `json:"dns_ptr,omitempty"`
	IP     *string `json:"ip,omitempty"`
}

// PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6
// IP address (v6)
type PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6 struct {
	DNSPtr *string `json:"dns_ptr,omitempty"`
	IP     *string `json:"ip,omitempty"`
}

// PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNet
// Public network information
type PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNet struct {
	Enabled bool                                                          `json:"enabled"`
	Ipv4    PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4 `json:"ipv4"`
	Ipv6    PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6 `json:"ipv6"`
}

// PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP
// Additional configuration for protocol http
type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP struct {
	Domain      string   `json:"domain"`
	Path        string   `json:"path"`
	Response    *string  `json:"response,omitempty"`
	StatusCodes []string `json:"status_codes,omitempty"`
	TLS         *bool    `json:"tls,omitempty"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum string

const (
	PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumTCP  PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = "tcp"
	PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumHTTP PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = "http"
)

// PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
// Service health check
type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck struct {
	HTTP     *PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP        `json:"http,omitempty"`
	Interval int64                                                                                                         `json:"interval"`
	Port     int64                                                                                                         `json:"port"`
	Protocol PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum `json:"protocol"`
	Retries  int64                                                                                                         `json:"retries"`
	Timeout  int64                                                                                                         `json:"timeout"`
}

// PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceHTTP
// Configuration option for protocols http and https
type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceHTTP struct {
	Certificates   []int64 `json:"certificates,omitempty"`
	CookieLifetime int64   `json:"cookie_lifetime"`
	CookieName     string  `json:"cookie_name"`
	RedirectHTTP   *bool   `json:"redirect_http,omitempty"`
	StickySessions *bool   `json:"sticky_sessions,omitempty"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum string

const (
	PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnumTCP   PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = "tcp"
	PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnumHTTP  PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = "http"
	PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnumHTTPS PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = "https"
)

type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerService struct {
	DestinationPort int64                                                                                             `json:"destination_port"`
	HealthCheck     PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck `json:"health_check"`
	HTTP            *PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceHTTP                          `json:"http,omitempty"`
	ListenPort      int64                                                                                             `json:"listen_port"`
	Protocol        PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum                   `json:"protocol"`
	Proxyprotocol   bool                                                                                              `json:"proxyprotocol"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus struct {
	ListenPort *int64  `json:"listen_port,omitempty"`
	Status     *string `json:"status,omitempty"`
}

// PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetIP
// IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetIP struct {
	IP string `json:"ip"`
}

// PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector
// Label selector and a list of selected targets
type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector struct {
	Selector string `json:"selector"`
}

// PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
// Server where the traffic should be routed through
type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer struct {
	ID int64 `json:"id"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus struct {
	ListenPort *int64  `json:"listen_port,omitempty"`
	Status     *string `json:"status,omitempty"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer struct {
	ID int64 `json:"id"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargets struct {
	HealthStatus []PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus `json:"health_status,omitempty"`
	Server       *PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer        `json:"server,omitempty"`
	Type         *string                                                                                 `json:"type,omitempty"`
	UsePrivateIP *bool                                                                                   `json:"use_private_ip,omitempty"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum string

const (
	PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnumServer        PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = "server"
	PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnumLabelSelector PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = "label_selector"
	PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnumIP            PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = "ip"
)

type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTarget struct {
	HealthStatus  []PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus            `json:"health_status,omitempty"`
	IP            *PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetIP                       `json:"ip,omitempty"`
	LabelSelector *PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector            `json:"label_selector,omitempty"`
	Server        *PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer `json:"server,omitempty"`
	Targets       []PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargets                 `json:"targets,omitempty"`
	Type          PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum                  `json:"type"`
	UsePrivateIP  *bool                                                                                       `json:"use_private_ip,omitempty"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancer struct {
	Algorithm        PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm             `json:"algorithm"`
	Created          string                                                                `json:"created"`
	ID               int64                                                                 `json:"id"`
	IncludedTraffic  int64                                                                 `json:"included_traffic"`
	IngoingTraffic   int64                                                                 `json:"ingoing_traffic"`
	Labels           map[string]string                                                     `json:"labels"`
	LoadBalancerType PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerType      `json:"load_balancer_type"`
	Location         PutLoadBalancersID200ApplicationJSONLoadBalancerLocation              `json:"location"`
	Name             string                                                                `json:"name"`
	OutgoingTraffic  int64                                                                 `json:"outgoing_traffic"`
	PrivateNet       []PutLoadBalancersID200ApplicationJSONLoadBalancerPrivateNet          `json:"private_net"`
	Protection       PutLoadBalancersID200ApplicationJSONLoadBalancerProtection            `json:"protection"`
	PublicNet        PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNet             `json:"public_net"`
	Services         []PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerService `json:"services"`
	Targets          []PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTarget  `json:"targets"`
}

type PutLoadBalancersID200ApplicationJSON struct {
	LoadBalancer PutLoadBalancersID200ApplicationJSONLoadBalancer `json:"load_balancer"`
}

type PutLoadBalancersIDRequest struct {
	PathParams PutLoadBalancersIDPathParams
	Request    *PutLoadBalancersIDRequestBody `request:"mediaType=application/json"`
}

type PutLoadBalancersIDResponse struct {
	ContentType                                string
	PutLoadBalancersID200ApplicationJSONObject *PutLoadBalancersID200ApplicationJSON
	StatusCode                                 int64
}
