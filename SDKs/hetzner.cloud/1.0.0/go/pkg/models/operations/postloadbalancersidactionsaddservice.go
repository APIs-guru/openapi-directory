package operations

type PostLoadBalancersIDActionsAddServicePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP struct {
	Domain      string   `json:"domain"`
	Path        string   `json:"path"`
	Response    *string  `json:"response,omitempty"`
	StatusCodes []string `json:"status_codes,omitempty"`
	TLS         *bool    `json:"tls,omitempty"`
}

type PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum string

const (
	PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumTCP  PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = "tcp"
	PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumHTTP PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = "http"
)

type PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck struct {
	HTTP     *PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP        `json:"http,omitempty"`
	Interval int64                                                                                             `json:"interval"`
	Port     int64                                                                                             `json:"port"`
	Protocol PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum `json:"protocol"`
	Retries  int64                                                                                             `json:"retries"`
	Timeout  int64                                                                                             `json:"timeout"`
}

type PostLoadBalancersIDActionsAddServiceLoadBalancerServiceHTTP struct {
	Certificates   []int64 `json:"certificates,omitempty"`
	CookieLifetime int64   `json:"cookie_lifetime"`
	CookieName     string  `json:"cookie_name"`
	RedirectHTTP   *bool   `json:"redirect_http,omitempty"`
	StickySessions *bool   `json:"sticky_sessions,omitempty"`
}

type PostLoadBalancersIDActionsAddServiceLoadBalancerServiceProtocolEnum string

const (
	PostLoadBalancersIDActionsAddServiceLoadBalancerServiceProtocolEnumTCP   PostLoadBalancersIDActionsAddServiceLoadBalancerServiceProtocolEnum = "tcp"
	PostLoadBalancersIDActionsAddServiceLoadBalancerServiceProtocolEnumHTTP  PostLoadBalancersIDActionsAddServiceLoadBalancerServiceProtocolEnum = "http"
	PostLoadBalancersIDActionsAddServiceLoadBalancerServiceProtocolEnumHTTPS PostLoadBalancersIDActionsAddServiceLoadBalancerServiceProtocolEnum = "https"
)

type PostLoadBalancersIDActionsAddServiceLoadBalancerService struct {
	DestinationPort int64                                                                                 `json:"destination_port"`
	HealthCheck     PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck `json:"health_check"`
	HTTP            *PostLoadBalancersIDActionsAddServiceLoadBalancerServiceHTTP                          `json:"http,omitempty"`
	ListenPort      int64                                                                                 `json:"listen_port"`
	Protocol        PostLoadBalancersIDActionsAddServiceLoadBalancerServiceProtocolEnum                   `json:"protocol"`
	Proxyprotocol   bool                                                                                  `json:"proxyprotocol"`
}

type PostLoadBalancersIDActionsAddServiceRequest struct {
	PathParams PostLoadBalancersIDActionsAddServicePathParams
	Request    *PostLoadBalancersIDActionsAddServiceLoadBalancerService `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsAddServiceActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsAddServiceActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsAddServiceActionResponseActionStatusEnum string

const (
	PostLoadBalancersIDActionsAddServiceActionResponseActionStatusEnumSuccess PostLoadBalancersIDActionsAddServiceActionResponseActionStatusEnum = "success"
	PostLoadBalancersIDActionsAddServiceActionResponseActionStatusEnumRunning PostLoadBalancersIDActionsAddServiceActionResponseActionStatusEnum = "running"
	PostLoadBalancersIDActionsAddServiceActionResponseActionStatusEnumError   PostLoadBalancersIDActionsAddServiceActionResponseActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsAddServiceActionResponseAction struct {
	Command   string                                                              `json:"command"`
	Error     PostLoadBalancersIDActionsAddServiceActionResponseActionError       `json:"error"`
	Finished  string                                                              `json:"finished"`
	ID        int64                                                               `json:"id"`
	Progress  float64                                                             `json:"progress"`
	Resources []PostLoadBalancersIDActionsAddServiceActionResponseActionResources `json:"resources"`
	Started   string                                                              `json:"started"`
	Status    PostLoadBalancersIDActionsAddServiceActionResponseActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsAddServiceActionResponse struct {
	Action PostLoadBalancersIDActionsAddServiceActionResponseAction `json:"action"`
}

type PostLoadBalancersIDActionsAddServiceResponse struct {
	ActionResponse *PostLoadBalancersIDActionsAddServiceActionResponse
	ContentType    string
	StatusCode     int64
}
