package operations

type GetLoadBalancersIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetLoadBalancersIDRequest struct {
	PathParams GetLoadBalancersIDPathParams
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum string

const (
	GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnumRoundRobin       GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum = "round_robin"
	GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnumLeastConnections GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum = "least_connections"
)

type GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm struct {
	Type GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum `json:"type"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePrices struct {
	Location     string                                                                             `json:"location"`
	PriceHourly  GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly  `json:"price_hourly"`
	PriceMonthly GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly `json:"price_monthly"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerType struct {
	Deprecated              string                                                                   `json:"deprecated"`
	Description             string                                                                   `json:"description"`
	ID                      float64                                                                  `json:"id"`
	MaxAssignedCertificates float64                                                                  `json:"max_assigned_certificates"`
	MaxConnections          float64                                                                  `json:"max_connections"`
	MaxServices             float64                                                                  `json:"max_services"`
	MaxTargets              float64                                                                  `json:"max_targets"`
	Name                    string                                                                   `json:"name"`
	Prices                  []GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePrices `json:"prices"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerPrivateNet struct {
	IP      *string `json:"ip,omitempty"`
	Network *int64  `json:"network,omitempty"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerProtection struct {
	Delete bool `json:"delete"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4 struct {
	DNSPtr *string `json:"dns_ptr,omitempty"`
	IP     *string `json:"ip,omitempty"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6 struct {
	DNSPtr *string `json:"dns_ptr,omitempty"`
	IP     *string `json:"ip,omitempty"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNet struct {
	Enabled bool                                                          `json:"enabled"`
	Ipv4    GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4 `json:"ipv4"`
	Ipv6    GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6 `json:"ipv6"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP struct {
	Domain      string   `json:"domain"`
	Path        string   `json:"path"`
	Response    *string  `json:"response,omitempty"`
	StatusCodes []string `json:"status_codes,omitempty"`
	TLS         *bool    `json:"tls,omitempty"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum string

const (
	GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumTCP  GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = "tcp"
	GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumHTTP GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = "http"
)

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck struct {
	HTTP     *GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP        `json:"http,omitempty"`
	Interval int64                                                                                                         `json:"interval"`
	Port     int64                                                                                                         `json:"port"`
	Protocol GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum `json:"protocol"`
	Retries  int64                                                                                                         `json:"retries"`
	Timeout  int64                                                                                                         `json:"timeout"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceHTTP struct {
	Certificates   []int64 `json:"certificates,omitempty"`
	CookieLifetime int64   `json:"cookie_lifetime"`
	CookieName     string  `json:"cookie_name"`
	RedirectHTTP   *bool   `json:"redirect_http,omitempty"`
	StickySessions *bool   `json:"sticky_sessions,omitempty"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum string

const (
	GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnumTCP   GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = "tcp"
	GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnumHTTP  GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = "http"
	GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnumHTTPS GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = "https"
)

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerService struct {
	DestinationPort int64                                                                                             `json:"destination_port"`
	HealthCheck     GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck `json:"health_check"`
	HTTP            *GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceHTTP                          `json:"http,omitempty"`
	ListenPort      int64                                                                                             `json:"listen_port"`
	Protocol        GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum                   `json:"protocol"`
	Proxyprotocol   bool                                                                                              `json:"proxyprotocol"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus struct {
	ListenPort *int64  `json:"listen_port,omitempty"`
	Status     *string `json:"status,omitempty"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetIP struct {
	IP string `json:"ip"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector struct {
	Selector string `json:"selector"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer struct {
	ID int64 `json:"id"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus struct {
	ListenPort *int64  `json:"listen_port,omitempty"`
	Status     *string `json:"status,omitempty"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer struct {
	ID int64 `json:"id"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargets struct {
	HealthStatus []GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus `json:"health_status,omitempty"`
	Server       *GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer        `json:"server,omitempty"`
	Type         *string                                                                                 `json:"type,omitempty"`
	UsePrivateIP *bool                                                                                   `json:"use_private_ip,omitempty"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum string

const (
	GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnumServer        GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = "server"
	GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnumLabelSelector GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = "label_selector"
	GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnumIP            GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = "ip"
)

type GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTarget struct {
	HealthStatus  []GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus            `json:"health_status,omitempty"`
	IP            *GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetIP                       `json:"ip,omitempty"`
	LabelSelector *GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector            `json:"label_selector,omitempty"`
	Server        *GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer `json:"server,omitempty"`
	Targets       []GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargets                 `json:"targets,omitempty"`
	Type          GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum                  `json:"type"`
	UsePrivateIP  *bool                                                                                       `json:"use_private_ip,omitempty"`
}

type GetLoadBalancersID200ApplicationJSONLoadBalancer struct {
	Algorithm        GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm             `json:"algorithm"`
	Created          string                                                                `json:"created"`
	ID               int64                                                                 `json:"id"`
	IncludedTraffic  int64                                                                 `json:"included_traffic"`
	IngoingTraffic   int64                                                                 `json:"ingoing_traffic"`
	Labels           map[string]string                                                     `json:"labels"`
	LoadBalancerType GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerType      `json:"load_balancer_type"`
	Location         GetLoadBalancersID200ApplicationJSONLoadBalancerLocation              `json:"location"`
	Name             string                                                                `json:"name"`
	OutgoingTraffic  int64                                                                 `json:"outgoing_traffic"`
	PrivateNet       []GetLoadBalancersID200ApplicationJSONLoadBalancerPrivateNet          `json:"private_net"`
	Protection       GetLoadBalancersID200ApplicationJSONLoadBalancerProtection            `json:"protection"`
	PublicNet        GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNet             `json:"public_net"`
	Services         []GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerService `json:"services"`
	Targets          []GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTarget  `json:"targets"`
}

type GetLoadBalancersID200ApplicationJSON struct {
	LoadBalancer GetLoadBalancersID200ApplicationJSONLoadBalancer `json:"load_balancer"`
}

type GetLoadBalancersIDResponse struct {
	ContentType                                string
	GetLoadBalancersID200ApplicationJSONObject *GetLoadBalancersID200ApplicationJSON
	StatusCode                                 int64
}
