package shared

type NodeBalancerConfigAlgorithmEnum string

const (
	NodeBalancerConfigAlgorithmEnumRoundrobin NodeBalancerConfigAlgorithmEnum = "roundrobin"
	NodeBalancerConfigAlgorithmEnumLeastconn  NodeBalancerConfigAlgorithmEnum = "leastconn"
	NodeBalancerConfigAlgorithmEnumSource     NodeBalancerConfigAlgorithmEnum = "source"
)

type NodeBalancerConfigCheckEnum string

const (
	NodeBalancerConfigCheckEnumNone       NodeBalancerConfigCheckEnum = "none"
	NodeBalancerConfigCheckEnumConnection NodeBalancerConfigCheckEnum = "connection"
	NodeBalancerConfigCheckEnumHTTP       NodeBalancerConfigCheckEnum = "http"
	NodeBalancerConfigCheckEnumHTTPBody   NodeBalancerConfigCheckEnum = "http_body"
)

type NodeBalancerConfigCipherSuiteEnum string

const (
	NodeBalancerConfigCipherSuiteEnumRecommended NodeBalancerConfigCipherSuiteEnum = "recommended"
	NodeBalancerConfigCipherSuiteEnumLegacy      NodeBalancerConfigCipherSuiteEnum = "legacy"
)

// NodeBalancerConfigNodesStatus
// A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.
type NodeBalancerConfigNodesStatus struct {
	Down *int64 `json:"down,omitempty"`
	Up   *int64 `json:"up,omitempty"`
}

type NodeBalancerConfigProtocolEnum string

const (
	NodeBalancerConfigProtocolEnumHTTP  NodeBalancerConfigProtocolEnum = "http"
	NodeBalancerConfigProtocolEnumHTTPS NodeBalancerConfigProtocolEnum = "https"
	NodeBalancerConfigProtocolEnumTCP   NodeBalancerConfigProtocolEnum = "tcp"
)

type NodeBalancerConfigProxyProtocolEnum string

const (
	NodeBalancerConfigProxyProtocolEnumNone NodeBalancerConfigProxyProtocolEnum = "none"
	NodeBalancerConfigProxyProtocolEnumV1   NodeBalancerConfigProxyProtocolEnum = "v1"
	NodeBalancerConfigProxyProtocolEnumV2   NodeBalancerConfigProxyProtocolEnum = "v2"
)

type NodeBalancerConfigStickinessEnum string

const (
	NodeBalancerConfigStickinessEnumNone       NodeBalancerConfigStickinessEnum = "none"
	NodeBalancerConfigStickinessEnumTable      NodeBalancerConfigStickinessEnum = "table"
	NodeBalancerConfigStickinessEnumHTTPCookie NodeBalancerConfigStickinessEnum = "http_cookie"
)

// NodeBalancerConfigInput
// A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
//
// NodeBalancer configs have a list of backends, called "nodes," that they forward requests between based on their configuration.
type NodeBalancerConfigInput struct {
	Algorithm     *NodeBalancerConfigAlgorithmEnum     `json:"algorithm,omitempty"`
	Check         *NodeBalancerConfigCheckEnum         `json:"check,omitempty"`
	CheckAttempts *int64                               `json:"check_attempts,omitempty"`
	CheckBody     *string                              `json:"check_body,omitempty"`
	CheckInterval *int64                               `json:"check_interval,omitempty"`
	CheckPassive  *bool                                `json:"check_passive,omitempty"`
	CheckPath     *string                              `json:"check_path,omitempty"`
	CheckTimeout  *int64                               `json:"check_timeout,omitempty"`
	CipherSuite   *NodeBalancerConfigCipherSuiteEnum   `json:"cipher_suite,omitempty"`
	Port          *int64                               `json:"port,omitempty"`
	Protocol      *NodeBalancerConfigProtocolEnum      `json:"protocol,omitempty"`
	ProxyProtocol *NodeBalancerConfigProxyProtocolEnum `json:"proxy_protocol,omitempty"`
	SslCert       *string                              `json:"ssl_cert,omitempty"`
	SslKey        *string                              `json:"ssl_key,omitempty"`
	Stickiness    *NodeBalancerConfigStickinessEnum    `json:"stickiness,omitempty"`
}

// NodeBalancerConfig
// A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
//
// NodeBalancer configs have a list of backends, called "nodes," that they forward requests between based on their configuration.
type NodeBalancerConfig struct {
	Algorithm      *NodeBalancerConfigAlgorithmEnum     `json:"algorithm,omitempty"`
	Check          *NodeBalancerConfigCheckEnum         `json:"check,omitempty"`
	CheckAttempts  *int64                               `json:"check_attempts,omitempty"`
	CheckBody      *string                              `json:"check_body,omitempty"`
	CheckInterval  *int64                               `json:"check_interval,omitempty"`
	CheckPassive   *bool                                `json:"check_passive,omitempty"`
	CheckPath      *string                              `json:"check_path,omitempty"`
	CheckTimeout   *int64                               `json:"check_timeout,omitempty"`
	CipherSuite    *NodeBalancerConfigCipherSuiteEnum   `json:"cipher_suite,omitempty"`
	ID             *int64                               `json:"id,omitempty"`
	NodebalancerID *int64                               `json:"nodebalancer_id,omitempty"`
	NodesStatus    *NodeBalancerConfigNodesStatus       `json:"nodes_status,omitempty"`
	Port           *int64                               `json:"port,omitempty"`
	Protocol       *NodeBalancerConfigProtocolEnum      `json:"protocol,omitempty"`
	ProxyProtocol  *NodeBalancerConfigProxyProtocolEnum `json:"proxy_protocol,omitempty"`
	SslCert        *string                              `json:"ssl_cert,omitempty"`
	SslCommonname  *string                              `json:"ssl_commonname,omitempty"`
	SslFingerprint *string                              `json:"ssl_fingerprint,omitempty"`
	SslKey         *string                              `json:"ssl_key,omitempty"`
	Stickiness     *NodeBalancerConfigStickinessEnum    `json:"stickiness,omitempty"`
}
