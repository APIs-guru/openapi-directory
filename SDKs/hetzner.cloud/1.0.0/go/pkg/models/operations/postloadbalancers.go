package operations




type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum string

const (
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnumRoundRobin PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum = "round_robin"
PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnumLeastConnections PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum = "least_connections"
)


type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm struct {
    Type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum `json:"type"`
    
}

type PostLoadBalancersCreateLoadBalancerRequestLabels struct {
    Labelkey *string `json:"labelkey,omitempty"`
    
}

type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP struct {
    Domain string `json:"domain"`
    Path string `json:"path"`
    Response *string `json:"response,omitempty"`
    StatusCodes []string `json:"status_codes,omitempty"`
    TLS *bool `json:"tls,omitempty"`
    
}


type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum string

const (
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumTCP PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = "tcp"
PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumHTTP PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = "http"
)


type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck struct {
    HTTP *PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP `json:"http,omitempty"`
    Interval int64 `json:"interval"`
    Port int64 `json:"port"`
    Protocol PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum `json:"protocol"`
    Retries int64 `json:"retries"`
    Timeout int64 `json:"timeout"`
    
}

type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHTTP struct {
    Certificates []int64 `json:"certificates,omitempty"`
    CookieLifetime int64 `json:"cookie_lifetime"`
    CookieName string `json:"cookie_name"`
    RedirectHTTP *bool `json:"redirect_http,omitempty"`
    StickySessions *bool `json:"sticky_sessions,omitempty"`
    
}


type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum string

const (
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnumTCP PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum = "tcp"
PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnumHTTP PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum = "http"
PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnumHTTPS PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum = "https"
)


type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService struct {
    DestinationPort int64 `json:"destination_port"`
    HealthCheck PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck `json:"health_check"`
    HTTP *PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHTTP `json:"http,omitempty"`
    ListenPort int64 `json:"listen_port"`
    Protocol PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum `json:"protocol"`
    Proxyprotocol bool `json:"proxyprotocol"`
    
}

type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus struct {
    ListenPort *int64 `json:"listen_port,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIP struct {
    IP string `json:"ip"`
    
}

type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector struct {
    Selector string `json:"selector"`
    
}

type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer struct {
    ID int64 `json:"id"`
    
}

type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus struct {
    ListenPort *int64 `json:"listen_port,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer struct {
    ID int64 `json:"id"`
    
}

type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets struct {
    HealthStatus []PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus `json:"health_status,omitempty"`
    Server *PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer `json:"server,omitempty"`
    Type *string `json:"type,omitempty"`
    UsePrivateIP *bool `json:"use_private_ip,omitempty"`
    
}


type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum string

const (
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnumServer PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum = "server"
PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnumLabelSelector PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum = "label_selector"
PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnumIP PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum = "ip"
)


type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget struct {
    HealthStatus []PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus `json:"health_status,omitempty"`
    IP *PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIP `json:"ip,omitempty"`
    LabelSelector *PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector `json:"label_selector,omitempty"`
    Server *PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer `json:"server,omitempty"`
    Targets []PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets `json:"targets,omitempty"`
    Type PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum `json:"type"`
    UsePrivateIP *bool `json:"use_private_ip,omitempty"`
    
}

type PostLoadBalancersCreateLoadBalancerRequest struct {
    Algorithm PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm `json:"algorithm"`
    Labels *PostLoadBalancersCreateLoadBalancerRequestLabels `json:"labels,omitempty"`
    LoadBalancerType string `json:"load_balancer_type"`
    Location *string `json:"location,omitempty"`
    Name string `json:"name"`
    Network *int64 `json:"network,omitempty"`
    NetworkZone *string `json:"network_zone,omitempty"`
    PublicInterface *bool `json:"public_interface,omitempty"`
    Services []PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService `json:"services,omitempty"`
    Targets []PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget `json:"targets,omitempty"`
    
}

type PostLoadBalancersRequest struct {
    Request *PostLoadBalancersCreateLoadBalancerRequest `request:"mediaType=application/json"`
    
}

type PostLoadBalancers201ApplicationJSONActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostLoadBalancers201ApplicationJSONActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostLoadBalancers201ApplicationJSONActionStatusEnum string

const (
    PostLoadBalancers201ApplicationJSONActionStatusEnumSuccess PostLoadBalancers201ApplicationJSONActionStatusEnum = "success"
PostLoadBalancers201ApplicationJSONActionStatusEnumRunning PostLoadBalancers201ApplicationJSONActionStatusEnum = "running"
PostLoadBalancers201ApplicationJSONActionStatusEnumError PostLoadBalancers201ApplicationJSONActionStatusEnum = "error"
)


type PostLoadBalancers201ApplicationJSONAction struct {
    Command string `json:"command"`
    Error PostLoadBalancers201ApplicationJSONActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostLoadBalancers201ApplicationJSONActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostLoadBalancers201ApplicationJSONActionStatusEnum `json:"status"`
    
}


type PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum string

const (
    PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnumRoundRobin PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum = "round_robin"
PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnumLeastConnections PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum = "least_connections"
)


type PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm struct {
    Type PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum `json:"type"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly struct {
    Gross string `json:"gross"`
    Net string `json:"net"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly struct {
    Gross string `json:"gross"`
    Net string `json:"net"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePrices struct {
    Location string `json:"location"`
    PriceHourly PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly `json:"price_hourly"`
    PriceMonthly PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly `json:"price_monthly"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerType struct {
    Deprecated string `json:"deprecated"`
    Description string `json:"description"`
    ID float64 `json:"id"`
    MaxAssignedCertificates float64 `json:"max_assigned_certificates"`
    MaxConnections float64 `json:"max_connections"`
    MaxServices float64 `json:"max_services"`
    MaxTargets float64 `json:"max_targets"`
    Name string `json:"name"`
    Prices []PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePrices `json:"prices"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLocation struct {
    City string `json:"city"`
    Country string `json:"country"`
    Description string `json:"description"`
    ID float64 `json:"id"`
    Latitude float64 `json:"latitude"`
    Longitude float64 `json:"longitude"`
    Name string `json:"name"`
    NetworkZone string `json:"network_zone"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerPrivateNet struct {
    IP *string `json:"ip,omitempty"`
    Network *int64 `json:"network,omitempty"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerProtection struct {
    Delete bool `json:"delete"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4 struct {
    DNSPtr *string `json:"dns_ptr,omitempty"`
    IP *string `json:"ip,omitempty"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6 struct {
    DNSPtr *string `json:"dns_ptr,omitempty"`
    IP *string `json:"ip,omitempty"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet struct {
    Enabled bool `json:"enabled"`
    Ipv4 PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4 `json:"ipv4"`
    Ipv6 PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6 `json:"ipv6"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP struct {
    Domain string `json:"domain"`
    Path string `json:"path"`
    Response *string `json:"response,omitempty"`
    StatusCodes []string `json:"status_codes,omitempty"`
    TLS *bool `json:"tls,omitempty"`
    
}


type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum string

const (
    PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumTCP PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = "tcp"
PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumHTTP PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = "http"
)


type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck struct {
    HTTP *PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP `json:"http,omitempty"`
    Interval int64 `json:"interval"`
    Port int64 `json:"port"`
    Protocol PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum `json:"protocol"`
    Retries int64 `json:"retries"`
    Timeout int64 `json:"timeout"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceHTTP struct {
    Certificates []int64 `json:"certificates,omitempty"`
    CookieLifetime int64 `json:"cookie_lifetime"`
    CookieName string `json:"cookie_name"`
    RedirectHTTP *bool `json:"redirect_http,omitempty"`
    StickySessions *bool `json:"sticky_sessions,omitempty"`
    
}


type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum string

const (
    PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnumTCP PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = "tcp"
PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnumHTTP PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = "http"
PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnumHTTPS PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = "https"
)


type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerService struct {
    DestinationPort int64 `json:"destination_port"`
    HealthCheck PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck `json:"health_check"`
    HTTP *PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceHTTP `json:"http,omitempty"`
    ListenPort int64 `json:"listen_port"`
    Protocol PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum `json:"protocol"`
    Proxyprotocol bool `json:"proxyprotocol"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus struct {
    ListenPort *int64 `json:"listen_port,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetIP struct {
    IP string `json:"ip"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector struct {
    Selector string `json:"selector"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer struct {
    ID int64 `json:"id"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus struct {
    ListenPort *int64 `json:"listen_port,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer struct {
    ID int64 `json:"id"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargets struct {
    HealthStatus []PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus `json:"health_status,omitempty"`
    Server *PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer `json:"server,omitempty"`
    Type *string `json:"type,omitempty"`
    UsePrivateIP *bool `json:"use_private_ip,omitempty"`
    
}


type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum string

const (
    PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnumServer PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = "server"
PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnumLabelSelector PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = "label_selector"
PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnumIP PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = "ip"
)


type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTarget struct {
    HealthStatus []PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus `json:"health_status,omitempty"`
    IP *PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetIP `json:"ip,omitempty"`
    LabelSelector *PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector `json:"label_selector,omitempty"`
    Server *PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer `json:"server,omitempty"`
    Targets []PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargets `json:"targets,omitempty"`
    Type PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum `json:"type"`
    UsePrivateIP *bool `json:"use_private_ip,omitempty"`
    
}

type PostLoadBalancers201ApplicationJSONLoadBalancer struct {
    Algorithm PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm `json:"algorithm"`
    Created string `json:"created"`
    ID int64 `json:"id"`
    IncludedTraffic int64 `json:"included_traffic"`
    IngoingTraffic int64 `json:"ingoing_traffic"`
    Labels map[string]string `json:"labels"`
    LoadBalancerType PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerType `json:"load_balancer_type"`
    Location PostLoadBalancers201ApplicationJSONLoadBalancerLocation `json:"location"`
    Name string `json:"name"`
    OutgoingTraffic int64 `json:"outgoing_traffic"`
    PrivateNet []PostLoadBalancers201ApplicationJSONLoadBalancerPrivateNet `json:"private_net"`
    Protection PostLoadBalancers201ApplicationJSONLoadBalancerProtection `json:"protection"`
    PublicNet PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet `json:"public_net"`
    Services []PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerService `json:"services"`
    Targets []PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTarget `json:"targets"`
    
}

type PostLoadBalancers201ApplicationJSON struct {
    Action PostLoadBalancers201ApplicationJSONAction `json:"action"`
    LoadBalancer PostLoadBalancers201ApplicationJSONLoadBalancer `json:"load_balancer"`
    
}

type PostLoadBalancersResponse struct {
    ContentType string 
    PostLoadBalancers201ApplicationJSONObject *PostLoadBalancers201ApplicationJSON 
    StatusCode int64 
    
}

