package operations

type PostLoadBalancersIDActionsUpdateServicePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP struct {
	Domain      string   `json:"domain"`
	Path        string   `json:"path"`
	Response    *string  `json:"response,omitempty"`
	StatusCodes []string `json:"status_codes,omitempty"`
	TLS         *bool    `json:"tls,omitempty"`
}

type PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum string

const (
	PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumTCP  PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = "tcp"
	PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumHTTP PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = "http"
)

type PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck struct {
	HTTP     *PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP        `json:"http,omitempty"`
	Interval int64                                                                                                `json:"interval"`
	Port     int64                                                                                                `json:"port"`
	Protocol PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum `json:"protocol"`
	Retries  int64                                                                                                `json:"retries"`
	Timeout  int64                                                                                                `json:"timeout"`
}

type PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceHTTP struct {
	Certificates   []int64 `json:"certificates,omitempty"`
	CookieLifetime int64   `json:"cookie_lifetime"`
	CookieName     string  `json:"cookie_name"`
	RedirectHTTP   *bool   `json:"redirect_http,omitempty"`
	StickySessions *bool   `json:"sticky_sessions,omitempty"`
}

type PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceProtocolEnum string

const (
	PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceProtocolEnumTCP   PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceProtocolEnum = "tcp"
	PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceProtocolEnumHTTP  PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceProtocolEnum = "http"
	PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceProtocolEnumHTTPS PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceProtocolEnum = "https"
)

type PostLoadBalancersIDActionsUpdateServiceLoadBalancerService struct {
	DestinationPort int64                                                                                    `json:"destination_port"`
	HealthCheck     PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck `json:"health_check"`
	HTTP            *PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceHTTP                          `json:"http,omitempty"`
	ListenPort      int64                                                                                    `json:"listen_port"`
	Protocol        PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceProtocolEnum                   `json:"protocol"`
	Proxyprotocol   bool                                                                                     `json:"proxyprotocol"`
}

type PostLoadBalancersIDActionsUpdateServiceRequest struct {
	PathParams PostLoadBalancersIDActionsUpdateServicePathParams
	Request    *PostLoadBalancersIDActionsUpdateServiceLoadBalancerService `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsUpdateServiceActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsUpdateServiceActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsUpdateServiceActionResponseActionStatusEnum string

const (
	PostLoadBalancersIDActionsUpdateServiceActionResponseActionStatusEnumSuccess PostLoadBalancersIDActionsUpdateServiceActionResponseActionStatusEnum = "success"
	PostLoadBalancersIDActionsUpdateServiceActionResponseActionStatusEnumRunning PostLoadBalancersIDActionsUpdateServiceActionResponseActionStatusEnum = "running"
	PostLoadBalancersIDActionsUpdateServiceActionResponseActionStatusEnumError   PostLoadBalancersIDActionsUpdateServiceActionResponseActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsUpdateServiceActionResponseAction struct {
	Command   string                                                                 `json:"command"`
	Error     PostLoadBalancersIDActionsUpdateServiceActionResponseActionError       `json:"error"`
	Finished  string                                                                 `json:"finished"`
	ID        int64                                                                  `json:"id"`
	Progress  float64                                                                `json:"progress"`
	Resources []PostLoadBalancersIDActionsUpdateServiceActionResponseActionResources `json:"resources"`
	Started   string                                                                 `json:"started"`
	Status    PostLoadBalancersIDActionsUpdateServiceActionResponseActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsUpdateServiceActionResponse struct {
	Action PostLoadBalancersIDActionsUpdateServiceActionResponseAction `json:"action"`
}

type PostLoadBalancersIDActionsUpdateServiceResponse struct {
	ActionResponse *PostLoadBalancersIDActionsUpdateServiceActionResponse
	ContentType    string
	StatusCode     int64
}
