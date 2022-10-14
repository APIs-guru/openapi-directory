package operations

type PostLoadBalancersIDActionsAddServicePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckHTTP struct {
	Domain      string   `json:"domain"`
	Path        string   `json:"path"`
	Response    *string  `json:"response,omitempty"`
	StatusCodes []string `json:"status_codes,omitempty"`
	TLS         *bool    `json:"tls,omitempty"`
}

type PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckProtocolEnum string

const (
	PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckProtocolEnumTCP  PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckProtocolEnum = "tcp"
	PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckProtocolEnumHTTP PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckProtocolEnum = "http"
)

type PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckLoadBalancerServiceHealthCheck struct {
	HTTP     *PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckHTTP        `json:"http,omitempty"`
	Interval int64                                                                  `json:"interval"`
	Port     int64                                                                  `json:"port"`
	Protocol PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckProtocolEnum `json:"protocol"`
	Retries  int64                                                                  `json:"retries"`
	Timeout  int64                                                                  `json:"timeout"`
}

type PostLoadBalancersIDActionsAddServiceRequestBodyHTTP struct {
	Certificates   []int64 `json:"certificates,omitempty"`
	CookieLifetime int64   `json:"cookie_lifetime"`
	CookieName     string  `json:"cookie_name"`
	RedirectHTTP   *bool   `json:"redirect_http,omitempty"`
	StickySessions *bool   `json:"sticky_sessions,omitempty"`
}

type PostLoadBalancersIDActionsAddServiceRequestBodyProtocolEnum string

const (
	PostLoadBalancersIDActionsAddServiceRequestBodyProtocolEnumTCP   PostLoadBalancersIDActionsAddServiceRequestBodyProtocolEnum = "tcp"
	PostLoadBalancersIDActionsAddServiceRequestBodyProtocolEnumHTTP  PostLoadBalancersIDActionsAddServiceRequestBodyProtocolEnum = "http"
	PostLoadBalancersIDActionsAddServiceRequestBodyProtocolEnumHTTPS PostLoadBalancersIDActionsAddServiceRequestBodyProtocolEnum = "https"
)

type PostLoadBalancersIDActionsAddServiceRequestBodyLoadBalancerService struct {
	DestinationPort int64                                                                                    `json:"destination_port"`
	HealthCheck     PostLoadBalancersIDActionsAddServiceRequestBodyHealthCheckLoadBalancerServiceHealthCheck `json:"health_check"`
	HTTP            *PostLoadBalancersIDActionsAddServiceRequestBodyHTTP                                     `json:"http,omitempty"`
	ListenPort      int64                                                                                    `json:"listen_port"`
	Protocol        PostLoadBalancersIDActionsAddServiceRequestBodyProtocolEnum                              `json:"protocol"`
	Proxyprotocol   bool                                                                                     `json:"proxyprotocol"`
}

type PostLoadBalancersIDActionsAddServiceRequest struct {
	PathParams PostLoadBalancersIDActionsAddServicePathParams
	Request    *PostLoadBalancersIDActionsAddServiceRequestBodyLoadBalancerService `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsAddService201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsAddService201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsAddService201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancersIDActionsAddService201ApplicationJSONActionStatusEnumSuccess PostLoadBalancersIDActionsAddService201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancersIDActionsAddService201ApplicationJSONActionStatusEnumRunning PostLoadBalancersIDActionsAddService201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancersIDActionsAddService201ApplicationJSONActionStatusEnumError   PostLoadBalancersIDActionsAddService201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsAddService201ApplicationJSONActionAction struct {
	Command   string                                                                  `json:"command"`
	Error     PostLoadBalancersIDActionsAddService201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                  `json:"finished"`
	ID        int64                                                                   `json:"id"`
	Progress  float64                                                                 `json:"progress"`
	Resources []PostLoadBalancersIDActionsAddService201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                  `json:"started"`
	Status    PostLoadBalancersIDActionsAddService201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsAddService201ApplicationJSONActionResponse struct {
	Action PostLoadBalancersIDActionsAddService201ApplicationJSONActionAction `json:"action"`
}

type PostLoadBalancersIDActionsAddServiceResponse struct {
	ActionResponse *PostLoadBalancersIDActionsAddService201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
