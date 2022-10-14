package operations

type PostLoadBalancersRequestBodyAlgorithmTypeEnum string

const (
	PostLoadBalancersRequestBodyAlgorithmTypeEnumRoundRobin       PostLoadBalancersRequestBodyAlgorithmTypeEnum = "round_robin"
	PostLoadBalancersRequestBodyAlgorithmTypeEnumLeastConnections PostLoadBalancersRequestBodyAlgorithmTypeEnum = "least_connections"
)

type PostLoadBalancersRequestBodyAlgorithmLoadBalancerAlgorithm struct {
	Type PostLoadBalancersRequestBodyAlgorithmTypeEnum `json:"type"`
}

type PostLoadBalancersRequestBodyLabels struct {
	Labelkey *string `json:"labelkey,omitempty"`
}

type PostLoadBalancersRequestBodyServicesHealthCheckHTTP struct {
	Domain      string   `json:"domain"`
	Path        string   `json:"path"`
	Response    *string  `json:"response,omitempty"`
	StatusCodes []string `json:"status_codes,omitempty"`
	TLS         *bool    `json:"tls,omitempty"`
}

type PostLoadBalancersRequestBodyServicesHealthCheckProtocolEnum string

const (
	PostLoadBalancersRequestBodyServicesHealthCheckProtocolEnumTCP  PostLoadBalancersRequestBodyServicesHealthCheckProtocolEnum = "tcp"
	PostLoadBalancersRequestBodyServicesHealthCheckProtocolEnumHTTP PostLoadBalancersRequestBodyServicesHealthCheckProtocolEnum = "http"
)

type PostLoadBalancersRequestBodyServicesHealthCheckLoadBalancerServiceHealthCheck struct {
	HTTP     *PostLoadBalancersRequestBodyServicesHealthCheckHTTP        `json:"http,omitempty"`
	Interval int64                                                       `json:"interval"`
	Port     int64                                                       `json:"port"`
	Protocol PostLoadBalancersRequestBodyServicesHealthCheckProtocolEnum `json:"protocol"`
	Retries  int64                                                       `json:"retries"`
	Timeout  int64                                                       `json:"timeout"`
}

type PostLoadBalancersRequestBodyServicesHTTP struct {
	Certificates   []int64 `json:"certificates,omitempty"`
	CookieLifetime int64   `json:"cookie_lifetime"`
	CookieName     string  `json:"cookie_name"`
	RedirectHTTP   *bool   `json:"redirect_http,omitempty"`
	StickySessions *bool   `json:"sticky_sessions,omitempty"`
}

type PostLoadBalancersRequestBodyServicesProtocolEnum string

const (
	PostLoadBalancersRequestBodyServicesProtocolEnumTCP   PostLoadBalancersRequestBodyServicesProtocolEnum = "tcp"
	PostLoadBalancersRequestBodyServicesProtocolEnumHTTP  PostLoadBalancersRequestBodyServicesProtocolEnum = "http"
	PostLoadBalancersRequestBodyServicesProtocolEnumHTTPS PostLoadBalancersRequestBodyServicesProtocolEnum = "https"
)

type PostLoadBalancersRequestBodyServicesLoadBalancerService struct {
	DestinationPort int64                                                                         `json:"destination_port"`
	HealthCheck     PostLoadBalancersRequestBodyServicesHealthCheckLoadBalancerServiceHealthCheck `json:"health_check"`
	HTTP            *PostLoadBalancersRequestBodyServicesHTTP                                     `json:"http,omitempty"`
	ListenPort      int64                                                                         `json:"listen_port"`
	Protocol        PostLoadBalancersRequestBodyServicesProtocolEnum                              `json:"protocol"`
	Proxyprotocol   bool                                                                          `json:"proxyprotocol"`
}

type PostLoadBalancersRequestBodyTargetsHealthStatus struct {
	ListenPort *int64  `json:"listen_port,omitempty"`
	Status     *string `json:"status,omitempty"`
}

type PostLoadBalancersRequestBodyTargetsIP struct {
	IP string `json:"ip"`
}

type PostLoadBalancersRequestBodyTargetsLabelSelector struct {
	Selector string `json:"selector"`
}

type PostLoadBalancersRequestBodyTargetsServerLoadBalancerTargetServer struct {
	ID int64 `json:"id"`
}

type PostLoadBalancersRequestBodyTargetsTargetsHealthStatus struct {
	ListenPort *int64  `json:"listen_port,omitempty"`
	Status     *string `json:"status,omitempty"`
}

type PostLoadBalancersRequestBodyTargetsTargetsServer struct {
	ID int64 `json:"id"`
}

type PostLoadBalancersRequestBodyTargetsTargets struct {
	HealthStatus []PostLoadBalancersRequestBodyTargetsTargetsHealthStatus `json:"health_status,omitempty"`
	Server       *PostLoadBalancersRequestBodyTargetsTargetsServer        `json:"server,omitempty"`
	Type         *string                                                  `json:"type,omitempty"`
	UsePrivateIP *bool                                                    `json:"use_private_ip,omitempty"`
}

type PostLoadBalancersRequestBodyTargetsTypeEnum string

const (
	PostLoadBalancersRequestBodyTargetsTypeEnumServer        PostLoadBalancersRequestBodyTargetsTypeEnum = "server"
	PostLoadBalancersRequestBodyTargetsTypeEnumLabelSelector PostLoadBalancersRequestBodyTargetsTypeEnum = "label_selector"
	PostLoadBalancersRequestBodyTargetsTypeEnumIP            PostLoadBalancersRequestBodyTargetsTypeEnum = "ip"
)

type PostLoadBalancersRequestBodyTargetsLoadBalancerTarget struct {
	HealthStatus  []PostLoadBalancersRequestBodyTargetsHealthStatus                  `json:"health_status,omitempty"`
	IP            *PostLoadBalancersRequestBodyTargetsIP                             `json:"ip,omitempty"`
	LabelSelector *PostLoadBalancersRequestBodyTargetsLabelSelector                  `json:"label_selector,omitempty"`
	Server        *PostLoadBalancersRequestBodyTargetsServerLoadBalancerTargetServer `json:"server,omitempty"`
	Targets       []PostLoadBalancersRequestBodyTargetsTargets                       `json:"targets,omitempty"`
	Type          PostLoadBalancersRequestBodyTargetsTypeEnum                        `json:"type"`
	UsePrivateIP  *bool                                                              `json:"use_private_ip,omitempty"`
}

type PostLoadBalancersRequestBodyCreateLoadBalancerRequest struct {
	Algorithm        PostLoadBalancersRequestBodyAlgorithmLoadBalancerAlgorithm `json:"algorithm"`
	Labels           *PostLoadBalancersRequestBodyLabels                        `json:"labels,omitempty"`
	LoadBalancerType string                                                     `json:"load_balancer_type"`
	Location         *string                                                    `json:"location,omitempty"`
	Name             string                                                     `json:"name"`
	Network          *int64                                                     `json:"network,omitempty"`
	NetworkZone      *string                                                    `json:"network_zone,omitempty"`
	PublicInterface  *bool                                                      `json:"public_interface,omitempty"`
	Services         []PostLoadBalancersRequestBodyServicesLoadBalancerService  `json:"services,omitempty"`
	Targets          []PostLoadBalancersRequestBodyTargetsLoadBalancerTarget    `json:"targets,omitempty"`
}

type PostLoadBalancersRequest struct {
	Request *PostLoadBalancersRequestBodyCreateLoadBalancerRequest `request:"mediaType=application/json"`
}

type PostLoadBalancers201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancers201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancers201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancers201ApplicationJSONActionStatusEnumSuccess PostLoadBalancers201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancers201ApplicationJSONActionStatusEnumRunning PostLoadBalancers201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancers201ApplicationJSONActionStatusEnumError   PostLoadBalancers201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancers201ApplicationJSONActionAction struct {
	Command   string                                               `json:"command"`
	Error     PostLoadBalancers201ApplicationJSONActionError       `json:"error"`
	Finished  string                                               `json:"finished"`
	ID        int64                                                `json:"id"`
	Progress  float64                                              `json:"progress"`
	Resources []PostLoadBalancers201ApplicationJSONActionResources `json:"resources"`
	Started   string                                               `json:"started"`
	Status    PostLoadBalancers201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum string

const (
	PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnumRoundRobin       PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum = "round_robin"
	PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnumLeastConnections PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum = "least_connections"
)

type PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm struct {
	Type PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum `json:"type"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePrices struct {
	Location     string                                                                            `json:"location"`
	PriceHourly  PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly  `json:"price_hourly"`
	PriceMonthly PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly `json:"price_monthly"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerType struct {
	Deprecated              string                                                                  `json:"deprecated"`
	Description             string                                                                  `json:"description"`
	ID                      float64                                                                 `json:"id"`
	MaxAssignedCertificates float64                                                                 `json:"max_assigned_certificates"`
	MaxConnections          float64                                                                 `json:"max_connections"`
	MaxServices             float64                                                                 `json:"max_services"`
	MaxTargets              float64                                                                 `json:"max_targets"`
	Name                    string                                                                  `json:"name"`
	Prices                  []PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePrices `json:"prices"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerPrivateNet struct {
	IP      *string `json:"ip,omitempty"`
	Network *int64  `json:"network,omitempty"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerProtection struct {
	Delete bool `json:"delete"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4 struct {
	DNSPtr *string `json:"dns_ptr,omitempty"`
	IP     *string `json:"ip,omitempty"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6 struct {
	DNSPtr *string `json:"dns_ptr,omitempty"`
	IP     *string `json:"ip,omitempty"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet struct {
	Enabled bool                                                         `json:"enabled"`
	Ipv4    PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4 `json:"ipv4"`
	Ipv6    PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6 `json:"ipv6"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckHTTP struct {
	Domain      string   `json:"domain"`
	Path        string   `json:"path"`
	Response    *string  `json:"response,omitempty"`
	StatusCodes []string `json:"status_codes,omitempty"`
	TLS         *bool    `json:"tls,omitempty"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnum string

const (
	PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnumTCP  PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnum = "tcp"
	PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnumHTTP PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnum = "http"
)

type PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckLoadBalancerServiceHealthCheck struct {
	HTTP     *PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckHTTP        `json:"http,omitempty"`
	Interval int64                                                                          `json:"interval"`
	Port     int64                                                                          `json:"port"`
	Protocol PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckProtocolEnum `json:"protocol"`
	Retries  int64                                                                          `json:"retries"`
	Timeout  int64                                                                          `json:"timeout"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerServicesHTTP struct {
	Certificates   []int64 `json:"certificates,omitempty"`
	CookieLifetime int64   `json:"cookie_lifetime"`
	CookieName     string  `json:"cookie_name"`
	RedirectHTTP   *bool   `json:"redirect_http,omitempty"`
	StickySessions *bool   `json:"sticky_sessions,omitempty"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerServicesProtocolEnum string

const (
	PostLoadBalancers201ApplicationJSONLoadBalancerServicesProtocolEnumTCP   PostLoadBalancers201ApplicationJSONLoadBalancerServicesProtocolEnum = "tcp"
	PostLoadBalancers201ApplicationJSONLoadBalancerServicesProtocolEnumHTTP  PostLoadBalancers201ApplicationJSONLoadBalancerServicesProtocolEnum = "http"
	PostLoadBalancers201ApplicationJSONLoadBalancerServicesProtocolEnumHTTPS PostLoadBalancers201ApplicationJSONLoadBalancerServicesProtocolEnum = "https"
)

type PostLoadBalancers201ApplicationJSONLoadBalancerServicesLoadBalancerService struct {
	DestinationPort int64                                                                                            `json:"destination_port"`
	HealthCheck     PostLoadBalancers201ApplicationJSONLoadBalancerServicesHealthCheckLoadBalancerServiceHealthCheck `json:"health_check"`
	HTTP            *PostLoadBalancers201ApplicationJSONLoadBalancerServicesHTTP                                     `json:"http,omitempty"`
	ListenPort      int64                                                                                            `json:"listen_port"`
	Protocol        PostLoadBalancers201ApplicationJSONLoadBalancerServicesProtocolEnum                              `json:"protocol"`
	Proxyprotocol   bool                                                                                             `json:"proxyprotocol"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerTargetsHealthStatus struct {
	ListenPort *int64  `json:"listen_port,omitempty"`
	Status     *string `json:"status,omitempty"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerTargetsIP struct {
	IP string `json:"ip"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerTargetsLabelSelector struct {
	Selector string `json:"selector"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerTargetsServerLoadBalancerTargetServer struct {
	ID int64 `json:"id"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTargetsHealthStatus struct {
	ListenPort *int64  `json:"listen_port,omitempty"`
	Status     *string `json:"status,omitempty"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTargetsServer struct {
	ID int64 `json:"id"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTargets struct {
	HealthStatus []PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTargetsHealthStatus `json:"health_status,omitempty"`
	Server       *PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTargetsServer        `json:"server,omitempty"`
	Type         *string                                                                     `json:"type,omitempty"`
	UsePrivateIP *bool                                                                       `json:"use_private_ip,omitempty"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTypeEnum string

const (
	PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTypeEnumServer        PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTypeEnum = "server"
	PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTypeEnumLabelSelector PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTypeEnum = "label_selector"
	PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTypeEnumIP            PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTypeEnum = "ip"
)

type PostLoadBalancers201ApplicationJSONLoadBalancerTargetsLoadBalancerTarget struct {
	HealthStatus  []PostLoadBalancers201ApplicationJSONLoadBalancerTargetsHealthStatus                  `json:"health_status,omitempty"`
	IP            *PostLoadBalancers201ApplicationJSONLoadBalancerTargetsIP                             `json:"ip,omitempty"`
	LabelSelector *PostLoadBalancers201ApplicationJSONLoadBalancerTargetsLabelSelector                  `json:"label_selector,omitempty"`
	Server        *PostLoadBalancers201ApplicationJSONLoadBalancerTargetsServerLoadBalancerTargetServer `json:"server,omitempty"`
	Targets       []PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTargets                       `json:"targets,omitempty"`
	Type          PostLoadBalancers201ApplicationJSONLoadBalancerTargetsTypeEnum                        `json:"type"`
	UsePrivateIP  *bool                                                                                 `json:"use_private_ip,omitempty"`
}

type PostLoadBalancers201ApplicationJSONLoadBalancer struct {
	Algorithm        PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm                     `json:"algorithm"`
	Created          string                                                                       `json:"created"`
	ID               int64                                                                        `json:"id"`
	IncludedTraffic  int64                                                                        `json:"included_traffic"`
	IngoingTraffic   int64                                                                        `json:"ingoing_traffic"`
	Labels           map[string]string                                                            `json:"labels"`
	LoadBalancerType PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerType              `json:"load_balancer_type"`
	Location         PostLoadBalancers201ApplicationJSONLoadBalancerLocation                      `json:"location"`
	Name             string                                                                       `json:"name"`
	OutgoingTraffic  int64                                                                        `json:"outgoing_traffic"`
	PrivateNet       []PostLoadBalancers201ApplicationJSONLoadBalancerPrivateNet                  `json:"private_net"`
	Protection       PostLoadBalancers201ApplicationJSONLoadBalancerProtection                    `json:"protection"`
	PublicNet        PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet                     `json:"public_net"`
	Services         []PostLoadBalancers201ApplicationJSONLoadBalancerServicesLoadBalancerService `json:"services"`
	Targets          []PostLoadBalancers201ApplicationJSONLoadBalancerTargetsLoadBalancerTarget   `json:"targets"`
}

type PostLoadBalancers201ApplicationJSON struct {
	Action       PostLoadBalancers201ApplicationJSONActionAction `json:"action"`
	LoadBalancer PostLoadBalancers201ApplicationJSONLoadBalancer `json:"load_balancer"`
}

type PostLoadBalancersResponse struct {
	ContentType                               string
	PostLoadBalancers201ApplicationJSONObject *PostLoadBalancers201ApplicationJSON
	StatusCode                                int64
}
