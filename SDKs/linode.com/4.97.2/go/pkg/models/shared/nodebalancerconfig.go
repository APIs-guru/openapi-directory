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

type NodeBalancerConfigNodesStatus struct {
	Down *int64 `json:"down"`
	Up   *int64 `json:"up"`
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

type NodeBalancerConfig struct {
	Algorithm      *NodeBalancerConfigAlgorithmEnum     `json:"algorithm"`
	Check          *NodeBalancerConfigCheckEnum         `json:"check"`
	CheckAttempts  *int64                               `json:"check_attempts"`
	CheckBody      *string                              `json:"check_body"`
	CheckInterval  *int64                               `json:"check_interval"`
	CheckPassive   *bool                                `json:"check_passive"`
	CheckPath      *string                              `json:"check_path"`
	CheckTimeout   *int64                               `json:"check_timeout"`
	CipherSuite    *NodeBalancerConfigCipherSuiteEnum   `json:"cipher_suite"`
	ID             *int64                               `json:"id"`
	NodebalancerID *int64                               `json:"nodebalancer_id"`
	NodesStatus    *NodeBalancerConfigNodesStatus       `json:"nodes_status"`
	Port           *int64                               `json:"port"`
	Protocol       *NodeBalancerConfigProtocolEnum      `json:"protocol"`
	ProxyProtocol  *NodeBalancerConfigProxyProtocolEnum `json:"proxy_protocol"`
	SslCert        *string                              `json:"ssl_cert"`
	SslCommonname  *string                              `json:"ssl_commonname"`
	SslFingerprint *string                              `json:"ssl_fingerprint"`
	SslKey         *string                              `json:"ssl_key"`
	Stickiness     *NodeBalancerConfigStickinessEnum    `json:"stickiness"`
}
