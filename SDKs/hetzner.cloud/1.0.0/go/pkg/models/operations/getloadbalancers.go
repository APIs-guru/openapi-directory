package operations

type GetLoadBalancersSortEnum string

const (
	GetLoadBalancersSortEnumID          GetLoadBalancersSortEnum = "id"
	GetLoadBalancersSortEnumIDAsc       GetLoadBalancersSortEnum = "id:asc"
	GetLoadBalancersSortEnumIDDesc      GetLoadBalancersSortEnum = "id:desc"
	GetLoadBalancersSortEnumName        GetLoadBalancersSortEnum = "name"
	GetLoadBalancersSortEnumNameAsc     GetLoadBalancersSortEnum = "name:asc"
	GetLoadBalancersSortEnumNameDesc    GetLoadBalancersSortEnum = "name:desc"
	GetLoadBalancersSortEnumCreated     GetLoadBalancersSortEnum = "created"
	GetLoadBalancersSortEnumCreatedAsc  GetLoadBalancersSortEnum = "created:asc"
	GetLoadBalancersSortEnumCreatedDesc GetLoadBalancersSortEnum = "created:desc"
)

type GetLoadBalancersQueryParams struct {
	LabelSelector *string                   `queryParam:"style=form,explode=true,name=label_selector"`
	Name          *string                   `queryParam:"style=form,explode=true,name=name"`
	Sort          *GetLoadBalancersSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetLoadBalancersRequest struct {
	QueryParams GetLoadBalancersQueryParams
}

type GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnum string

const (
	GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnumRoundRobin       GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnum = "round_robin"
	GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnumLeastConnections GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnum = "least_connections"
)

type GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithm struct {
	Type GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnum `json:"type"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePrices struct {
	Location     string                                                                            `json:"location"`
	PriceHourly  GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceHourly  `json:"price_hourly"`
	PriceMonthly GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceMonthly `json:"price_monthly"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerType struct {
	Deprecated              string                                                                  `json:"deprecated"`
	Description             string                                                                  `json:"description"`
	ID                      float64                                                                 `json:"id"`
	MaxAssignedCertificates float64                                                                 `json:"max_assigned_certificates"`
	MaxConnections          float64                                                                 `json:"max_connections"`
	MaxServices             float64                                                                 `json:"max_services"`
	MaxTargets              float64                                                                 `json:"max_targets"`
	Name                    string                                                                  `json:"name"`
	Prices                  []GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePrices `json:"prices"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersPrivateNet struct {
	IP      *string `json:"ip,omitempty"`
	Network *int64  `json:"network,omitempty"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersProtection struct {
	Delete bool `json:"delete"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv4 struct {
	DNSPtr *string `json:"dns_ptr,omitempty"`
	IP     *string `json:"ip,omitempty"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv6 struct {
	DNSPtr *string `json:"dns_ptr,omitempty"`
	IP     *string `json:"ip,omitempty"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersPublicNet struct {
	Enabled bool                                                         `json:"enabled"`
	Ipv4    GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv4 `json:"ipv4"`
	Ipv6    GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv6 `json:"ipv6"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersServicesHealthCheckHTTP struct {
	Domain      string   `json:"domain"`
	Path        string   `json:"path"`
	Response    *string  `json:"response,omitempty"`
	StatusCodes []string `json:"status_codes,omitempty"`
	TLS         *bool    `json:"tls,omitempty"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersServicesHealthCheckProtocolEnum string

const (
	GetLoadBalancers200ApplicationJSONLoadBalancersServicesHealthCheckProtocolEnumTCP  GetLoadBalancers200ApplicationJSONLoadBalancersServicesHealthCheckProtocolEnum = "tcp"
	GetLoadBalancers200ApplicationJSONLoadBalancersServicesHealthCheckProtocolEnumHTTP GetLoadBalancers200ApplicationJSONLoadBalancersServicesHealthCheckProtocolEnum = "http"
)

type GetLoadBalancers200ApplicationJSONLoadBalancersServicesHealthCheckLoadBalancerServiceHealthCheck struct {
	HTTP     *GetLoadBalancers200ApplicationJSONLoadBalancersServicesHealthCheckHTTP        `json:"http,omitempty"`
	Interval int64                                                                          `json:"interval"`
	Port     int64                                                                          `json:"port"`
	Protocol GetLoadBalancers200ApplicationJSONLoadBalancersServicesHealthCheckProtocolEnum `json:"protocol"`
	Retries  int64                                                                          `json:"retries"`
	Timeout  int64                                                                          `json:"timeout"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersServicesHTTP struct {
	Certificates   []int64 `json:"certificates,omitempty"`
	CookieLifetime int64   `json:"cookie_lifetime"`
	CookieName     string  `json:"cookie_name"`
	RedirectHTTP   *bool   `json:"redirect_http,omitempty"`
	StickySessions *bool   `json:"sticky_sessions,omitempty"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersServicesProtocolEnum string

const (
	GetLoadBalancers200ApplicationJSONLoadBalancersServicesProtocolEnumTCP   GetLoadBalancers200ApplicationJSONLoadBalancersServicesProtocolEnum = "tcp"
	GetLoadBalancers200ApplicationJSONLoadBalancersServicesProtocolEnumHTTP  GetLoadBalancers200ApplicationJSONLoadBalancersServicesProtocolEnum = "http"
	GetLoadBalancers200ApplicationJSONLoadBalancersServicesProtocolEnumHTTPS GetLoadBalancers200ApplicationJSONLoadBalancersServicesProtocolEnum = "https"
)

type GetLoadBalancers200ApplicationJSONLoadBalancersServicesLoadBalancerService struct {
	DestinationPort int64                                                                                            `json:"destination_port"`
	HealthCheck     GetLoadBalancers200ApplicationJSONLoadBalancersServicesHealthCheckLoadBalancerServiceHealthCheck `json:"health_check"`
	HTTP            *GetLoadBalancers200ApplicationJSONLoadBalancersServicesHTTP                                     `json:"http,omitempty"`
	ListenPort      int64                                                                                            `json:"listen_port"`
	Protocol        GetLoadBalancers200ApplicationJSONLoadBalancersServicesProtocolEnum                              `json:"protocol"`
	Proxyprotocol   bool                                                                                             `json:"proxyprotocol"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersTargetsHealthStatus struct {
	ListenPort *int64  `json:"listen_port,omitempty"`
	Status     *string `json:"status,omitempty"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersTargetsIP struct {
	IP string `json:"ip"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersTargetsLabelSelector struct {
	Selector string `json:"selector"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersTargetsServerLoadBalancerTargetServer struct {
	ID int64 `json:"id"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTargetsHealthStatus struct {
	ListenPort *int64  `json:"listen_port,omitempty"`
	Status     *string `json:"status,omitempty"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTargetsServer struct {
	ID int64 `json:"id"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTargets struct {
	HealthStatus []GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTargetsHealthStatus `json:"health_status,omitempty"`
	Server       *GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTargetsServer        `json:"server,omitempty"`
	Type         *string                                                                     `json:"type,omitempty"`
	UsePrivateIP *bool                                                                       `json:"use_private_ip,omitempty"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTypeEnum string

const (
	GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTypeEnumServer        GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTypeEnum = "server"
	GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTypeEnumLabelSelector GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTypeEnum = "label_selector"
	GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTypeEnumIP            GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTypeEnum = "ip"
)

type GetLoadBalancers200ApplicationJSONLoadBalancersTargetsLoadBalancerTarget struct {
	HealthStatus  []GetLoadBalancers200ApplicationJSONLoadBalancersTargetsHealthStatus                  `json:"health_status,omitempty"`
	IP            *GetLoadBalancers200ApplicationJSONLoadBalancersTargetsIP                             `json:"ip,omitempty"`
	LabelSelector *GetLoadBalancers200ApplicationJSONLoadBalancersTargetsLabelSelector                  `json:"label_selector,omitempty"`
	Server        *GetLoadBalancers200ApplicationJSONLoadBalancersTargetsServerLoadBalancerTargetServer `json:"server,omitempty"`
	Targets       []GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTargets                       `json:"targets,omitempty"`
	Type          GetLoadBalancers200ApplicationJSONLoadBalancersTargetsTypeEnum                        `json:"type"`
	UsePrivateIP  *bool                                                                                 `json:"use_private_ip,omitempty"`
}

type GetLoadBalancers200ApplicationJSONLoadBalancers struct {
	Algorithm        GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithm                     `json:"algorithm"`
	Created          string                                                                       `json:"created"`
	ID               int64                                                                        `json:"id"`
	IncludedTraffic  int64                                                                        `json:"included_traffic"`
	IngoingTraffic   int64                                                                        `json:"ingoing_traffic"`
	Labels           map[string]string                                                            `json:"labels"`
	LoadBalancerType GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerType              `json:"load_balancer_type"`
	Location         GetLoadBalancers200ApplicationJSONLoadBalancersLocation                      `json:"location"`
	Name             string                                                                       `json:"name"`
	OutgoingTraffic  int64                                                                        `json:"outgoing_traffic"`
	PrivateNet       []GetLoadBalancers200ApplicationJSONLoadBalancersPrivateNet                  `json:"private_net"`
	Protection       GetLoadBalancers200ApplicationJSONLoadBalancersProtection                    `json:"protection"`
	PublicNet        GetLoadBalancers200ApplicationJSONLoadBalancersPublicNet                     `json:"public_net"`
	Services         []GetLoadBalancers200ApplicationJSONLoadBalancersServicesLoadBalancerService `json:"services"`
	Targets          []GetLoadBalancers200ApplicationJSONLoadBalancersTargetsLoadBalancerTarget   `json:"targets"`
}

type GetLoadBalancers200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetLoadBalancers200ApplicationJSONMeta struct {
	Pagination GetLoadBalancers200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetLoadBalancers200ApplicationJSON struct {
	LoadBalancers []GetLoadBalancers200ApplicationJSONLoadBalancers `json:"load_balancers"`
	Meta          *GetLoadBalancers200ApplicationJSONMeta           `json:"meta,omitempty"`
}

type GetLoadBalancersResponse struct {
	ContentType                              string
	GetLoadBalancers200ApplicationJSONObject *GetLoadBalancers200ApplicationJSON
	StatusCode                               int64
}
