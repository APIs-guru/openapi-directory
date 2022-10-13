package operations

type PutLoadBalancersIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutLoadBalancersIDRequestBody struct {
	Labels map[string]interface{} `json:"labels"`
	Name   *string                `json:"name"`
}

type PutLoadBalancersIDRequest struct {
	PathParams PutLoadBalancersIDPathParams
	Request    *PutLoadBalancersIDRequestBody `request:"mediaType=application/json"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum string

const (
	PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnumRoundRobin       PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum = "round_robin"
	PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnumLeastConnections PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum = "least_connections"
)

type PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm struct {
	Type PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum `json:"type"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

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
	IP      *string `json:"ip"`
	Network *int64  `json:"network"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerProtection struct {
	Delete bool `json:"delete"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4 struct {
	DNSPtr *string `json:"dns_ptr"`
	IP     *string `json:"ip"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6 struct {
	DNSPtr *string `json:"dns_ptr"`
	IP     *string `json:"ip"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNet struct {
	Enabled bool                                                          `json:"enabled"`
	Ipv4    PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4 `json:"ipv4"`
	Ipv6    PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6 `json:"ipv6"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerServicesHealthCheckHTTP struct {
	Domain      string   `json:"domain"`
	Path        string   `json:"path"`
	Response    *string  `json:"response"`
	StatusCodes []string `json:"status_codes"`
	TLS         *bool    `json:"tls"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnum string

const (
	PutLoadBalancersID200ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnumTCP  PutLoadBalancersID200ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnum = "tcp"
	PutLoadBalancersID200ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnumHTTP PutLoadBalancersID200ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnum = "http"
)

type PutLoadBalancersID200ApplicationJSONLoadBalancerServicesHealthCheckLoadBalancerServiceHealthCheck struct {
	HTTP     *PutLoadBalancersID200ApplicationJSONLoadBalancerServicesHealthCheckHTTP        `json:"http"`
	Interval int64                                                                           `json:"interval"`
	Port     int64                                                                           `json:"port"`
	Protocol PutLoadBalancersID200ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnum `json:"protocol"`
	Retries  int64                                                                           `json:"retries"`
	Timeout  int64                                                                           `json:"timeout"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerServicesHTTP struct {
	Certificates   []int64 `json:"certificates"`
	CookieLifetime int64   `json:"cookie_lifetime"`
	CookieName     string  `json:"cookie_name"`
	RedirectHTTP   *bool   `json:"redirect_http"`
	StickySessions *bool   `json:"sticky_sessions"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerServicesProtocolEnum string

const (
	PutLoadBalancersID200ApplicationJSONLoadBalancerServicesProtocolEnumTCP   PutLoadBalancersID200ApplicationJSONLoadBalancerServicesProtocolEnum = "tcp"
	PutLoadBalancersID200ApplicationJSONLoadBalancerServicesProtocolEnumHTTP  PutLoadBalancersID200ApplicationJSONLoadBalancerServicesProtocolEnum = "http"
	PutLoadBalancersID200ApplicationJSONLoadBalancerServicesProtocolEnumHTTPS PutLoadBalancersID200ApplicationJSONLoadBalancerServicesProtocolEnum = "https"
)

type PutLoadBalancersID200ApplicationJSONLoadBalancerServicesLoadBalancerService struct {
	DestinationPort int64                                                                                             `json:"destination_port"`
	HealthCheck     PutLoadBalancersID200ApplicationJSONLoadBalancerServicesHealthCheckLoadBalancerServiceHealthCheck `json:"health_check"`
	HTTP            *PutLoadBalancersID200ApplicationJSONLoadBalancerServicesHTTP                                     `json:"http"`
	ListenPort      int64                                                                                             `json:"listen_port"`
	Protocol        PutLoadBalancersID200ApplicationJSONLoadBalancerServicesProtocolEnum                              `json:"protocol"`
	Proxyprotocol   bool                                                                                              `json:"proxyprotocol"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsHealthStatus struct {
	ListenPort *int64  `json:"listen_port"`
	Status     *string `json:"status"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsIP struct {
	IP string `json:"ip"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsLabelSelector struct {
	Selector string `json:"selector"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsServerLoadBalancerTargetServer struct {
	ID int64 `json:"id"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTargetsHealthStatus struct {
	ListenPort *int64  `json:"listen_port"`
	Status     *string `json:"status"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTargetsServer struct {
	ID int64 `json:"id"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTargets struct {
	HealthStatus []PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTargetsHealthStatus `json:"health_status"`
	Server       *PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTargetsServer        `json:"server"`
	Type         *string                                                                      `json:"type"`
	UsePrivateIP *bool                                                                        `json:"use_private_ip"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTypeEnum string

const (
	PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTypeEnumServer        PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTypeEnum = "server"
	PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTypeEnumLabelSelector PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTypeEnum = "label_selector"
	PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTypeEnumIP            PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTypeEnum = "ip"
)

type PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsLoadBalancerTarget struct {
	HealthStatus  []PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsHealthStatus                  `json:"health_status"`
	IP            *PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsIP                             `json:"ip"`
	LabelSelector *PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsLabelSelector                  `json:"label_selector"`
	Server        *PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsServerLoadBalancerTargetServer `json:"server"`
	Targets       []PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTargets                       `json:"targets"`
	Type          PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsTypeEnum                        `json:"type"`
	UsePrivateIP  *bool                                                                                  `json:"use_private_ip"`
}

type PutLoadBalancersID200ApplicationJSONLoadBalancer struct {
	Algorithm        PutLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm                     `json:"algorithm"`
	Created          string                                                                        `json:"created"`
	ID               int64                                                                         `json:"id"`
	IncludedTraffic  int64                                                                         `json:"included_traffic"`
	IngoingTraffic   int64                                                                         `json:"ingoing_traffic"`
	Labels           map[string]string                                                             `json:"labels"`
	LoadBalancerType PutLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerType              `json:"load_balancer_type"`
	Location         PutLoadBalancersID200ApplicationJSONLoadBalancerLocation                      `json:"location"`
	Name             string                                                                        `json:"name"`
	OutgoingTraffic  int64                                                                         `json:"outgoing_traffic"`
	PrivateNet       []PutLoadBalancersID200ApplicationJSONLoadBalancerPrivateNet                  `json:"private_net"`
	Protection       PutLoadBalancersID200ApplicationJSONLoadBalancerProtection                    `json:"protection"`
	PublicNet        PutLoadBalancersID200ApplicationJSONLoadBalancerPublicNet                     `json:"public_net"`
	Services         []PutLoadBalancersID200ApplicationJSONLoadBalancerServicesLoadBalancerService `json:"services"`
	Targets          []PutLoadBalancersID200ApplicationJSONLoadBalancerTargetsLoadBalancerTarget   `json:"targets"`
}

type PutLoadBalancersID200ApplicationJSON struct {
	LoadBalancer PutLoadBalancersID200ApplicationJSONLoadBalancer `json:"load_balancer"`
}

type PutLoadBalancersIDResponse struct {
	ContentType                                string
	PutLoadBalancersID200ApplicationJSONObject *PutLoadBalancersID200ApplicationJSON
	StatusCode                                 int64
}
