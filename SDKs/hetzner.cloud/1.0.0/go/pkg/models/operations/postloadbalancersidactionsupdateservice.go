package operations

type PostLoadBalancersIDActionsUpdateServicePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckHTTP struct {
	Domain      string   `json:"domain"`
	Path        string   `json:"path"`
	Response    *string  `json:"response"`
	StatusCodes []string `json:"status_codes"`
	TLS         *bool    `json:"tls"`
}

type PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckProtocolEnum string

const (
	PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckProtocolEnumTCP  PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckProtocolEnum = "tcp"
	PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckProtocolEnumHTTP PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckProtocolEnum = "http"
)

type PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckLoadBalancerServiceHealthCheck struct {
	HTTP     *PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckHTTP        `json:"http"`
	Interval int64                                                                     `json:"interval"`
	Port     int64                                                                     `json:"port"`
	Protocol PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckProtocolEnum `json:"protocol"`
	Retries  int64                                                                     `json:"retries"`
	Timeout  int64                                                                     `json:"timeout"`
}

type PostLoadBalancersIDActionsUpdateServiceRequestBodyHTTP struct {
	Certificates   []int64 `json:"certificates"`
	CookieLifetime int64   `json:"cookie_lifetime"`
	CookieName     string  `json:"cookie_name"`
	RedirectHTTP   *bool   `json:"redirect_http"`
	StickySessions *bool   `json:"sticky_sessions"`
}

type PostLoadBalancersIDActionsUpdateServiceRequestBodyProtocolEnum string

const (
	PostLoadBalancersIDActionsUpdateServiceRequestBodyProtocolEnumTCP   PostLoadBalancersIDActionsUpdateServiceRequestBodyProtocolEnum = "tcp"
	PostLoadBalancersIDActionsUpdateServiceRequestBodyProtocolEnumHTTP  PostLoadBalancersIDActionsUpdateServiceRequestBodyProtocolEnum = "http"
	PostLoadBalancersIDActionsUpdateServiceRequestBodyProtocolEnumHTTPS PostLoadBalancersIDActionsUpdateServiceRequestBodyProtocolEnum = "https"
)

type PostLoadBalancersIDActionsUpdateServiceRequestBodyLoadBalancerService struct {
	DestinationPort int64                                                                                       `json:"destination_port"`
	HealthCheck     PostLoadBalancersIDActionsUpdateServiceRequestBodyHealthCheckLoadBalancerServiceHealthCheck `json:"health_check"`
	HTTP            *PostLoadBalancersIDActionsUpdateServiceRequestBodyHTTP                                     `json:"http"`
	ListenPort      int64                                                                                       `json:"listen_port"`
	Protocol        PostLoadBalancersIDActionsUpdateServiceRequestBodyProtocolEnum                              `json:"protocol"`
	Proxyprotocol   bool                                                                                        `json:"proxyprotocol"`
}

type PostLoadBalancersIDActionsUpdateServiceRequest struct {
	PathParams PostLoadBalancersIDActionsUpdateServicePathParams
	Request    *PostLoadBalancersIDActionsUpdateServiceRequestBodyLoadBalancerService `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionStatusEnumSuccess PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionStatusEnumRunning PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionStatusEnumError   PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionAction struct {
	Command   string                                                                     `json:"command"`
	Error     PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                     `json:"finished"`
	ID        int64                                                                      `json:"id"`
	Progress  float64                                                                    `json:"progress"`
	Resources []PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                     `json:"started"`
	Status    PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionResponse struct {
	Action PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionAction `json:"action"`
}

type PostLoadBalancersIDActionsUpdateServiceResponse struct {
	ActionResponse *PostLoadBalancersIDActionsUpdateService201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
