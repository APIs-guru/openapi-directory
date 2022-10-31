package operations

import (
	"openapi/pkg/models/shared"
)

type RebuildNodeBalancerConfigPathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type RebuildNodeBalancerConfigRequestBodyAlgorithmEnum string

const (
	RebuildNodeBalancerConfigRequestBodyAlgorithmEnumRoundrobin RebuildNodeBalancerConfigRequestBodyAlgorithmEnum = "roundrobin"
	RebuildNodeBalancerConfigRequestBodyAlgorithmEnumLeastconn  RebuildNodeBalancerConfigRequestBodyAlgorithmEnum = "leastconn"
	RebuildNodeBalancerConfigRequestBodyAlgorithmEnumSource     RebuildNodeBalancerConfigRequestBodyAlgorithmEnum = "source"
)

type RebuildNodeBalancerConfigRequestBodyCheckEnum string

const (
	RebuildNodeBalancerConfigRequestBodyCheckEnumNone       RebuildNodeBalancerConfigRequestBodyCheckEnum = "none"
	RebuildNodeBalancerConfigRequestBodyCheckEnumConnection RebuildNodeBalancerConfigRequestBodyCheckEnum = "connection"
	RebuildNodeBalancerConfigRequestBodyCheckEnumHTTP       RebuildNodeBalancerConfigRequestBodyCheckEnum = "http"
	RebuildNodeBalancerConfigRequestBodyCheckEnumHTTPBody   RebuildNodeBalancerConfigRequestBodyCheckEnum = "http_body"
)

type RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum string

const (
	RebuildNodeBalancerConfigRequestBodyCipherSuiteEnumRecommended RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum = "recommended"
	RebuildNodeBalancerConfigRequestBodyCipherSuiteEnumLegacy      RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum = "legacy"
)

type RebuildNodeBalancerConfigRequestBodyNodesStatus struct {
	Down *int64 `json:"down,omitempty"`
	Up   *int64 `json:"up,omitempty"`
}

type RebuildNodeBalancerConfigRequestBodyProtocolEnum string

const (
	RebuildNodeBalancerConfigRequestBodyProtocolEnumHTTP  RebuildNodeBalancerConfigRequestBodyProtocolEnum = "http"
	RebuildNodeBalancerConfigRequestBodyProtocolEnumHTTPS RebuildNodeBalancerConfigRequestBodyProtocolEnum = "https"
	RebuildNodeBalancerConfigRequestBodyProtocolEnumTCP   RebuildNodeBalancerConfigRequestBodyProtocolEnum = "tcp"
)

type RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum string

const (
	RebuildNodeBalancerConfigRequestBodyProxyProtocolEnumNone RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum = "none"
	RebuildNodeBalancerConfigRequestBodyProxyProtocolEnumV1   RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum = "v1"
	RebuildNodeBalancerConfigRequestBodyProxyProtocolEnumV2   RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum = "v2"
)

type RebuildNodeBalancerConfigRequestBodyStickinessEnum string

const (
	RebuildNodeBalancerConfigRequestBodyStickinessEnumNone       RebuildNodeBalancerConfigRequestBodyStickinessEnum = "none"
	RebuildNodeBalancerConfigRequestBodyStickinessEnumTable      RebuildNodeBalancerConfigRequestBodyStickinessEnum = "table"
	RebuildNodeBalancerConfigRequestBodyStickinessEnumHTTPCookie RebuildNodeBalancerConfigRequestBodyStickinessEnum = "http_cookie"
)

type RebuildNodeBalancerConfigRequestBody struct {
	Algorithm      *RebuildNodeBalancerConfigRequestBodyAlgorithmEnum     `json:"algorithm,omitempty"`
	Check          *RebuildNodeBalancerConfigRequestBodyCheckEnum         `json:"check,omitempty"`
	CheckAttempts  *int64                                                 `json:"check_attempts,omitempty"`
	CheckBody      *string                                                `json:"check_body,omitempty"`
	CheckInterval  *int64                                                 `json:"check_interval,omitempty"`
	CheckPassive   *bool                                                  `json:"check_passive,omitempty"`
	CheckPath      *string                                                `json:"check_path,omitempty"`
	CheckTimeout   *int64                                                 `json:"check_timeout,omitempty"`
	CipherSuite    *RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum   `json:"cipher_suite,omitempty"`
	ID             *int64                                                 `json:"id,omitempty"`
	NodebalancerID *int64                                                 `json:"nodebalancer_id,omitempty"`
	Nodes          []shared.NodeBalancerNode                              `json:"nodes,omitempty"`
	NodesStatus    *RebuildNodeBalancerConfigRequestBodyNodesStatus       `json:"nodes_status,omitempty"`
	Port           *int64                                                 `json:"port,omitempty"`
	Protocol       *RebuildNodeBalancerConfigRequestBodyProtocolEnum      `json:"protocol,omitempty"`
	ProxyProtocol  *RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum `json:"proxy_protocol,omitempty"`
	SslCert        *string                                                `json:"ssl_cert,omitempty"`
	SslCommonname  *string                                                `json:"ssl_commonname,omitempty"`
	SslFingerprint *string                                                `json:"ssl_fingerprint,omitempty"`
	SslKey         *string                                                `json:"ssl_key,omitempty"`
	Stickiness     *RebuildNodeBalancerConfigRequestBodyStickinessEnum    `json:"stickiness,omitempty"`
}

type RebuildNodeBalancerConfigSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type RebuildNodeBalancerConfigSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type RebuildNodeBalancerConfigSecurity struct {
	Option1 *RebuildNodeBalancerConfigSecurityOption1 `security:"option"`
	Option2 *RebuildNodeBalancerConfigSecurityOption2 `security:"option"`
}

type RebuildNodeBalancerConfigRequest struct {
	PathParams RebuildNodeBalancerConfigPathParams
	Request    RebuildNodeBalancerConfigRequestBody `request:"mediaType=application/json"`
	Security   RebuildNodeBalancerConfigSecurity
}

type RebuildNodeBalancerConfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type RebuildNodeBalancerConfigResponse struct {
	ContentType                                           string
	NodeBalancer                                          *shared.NodeBalancer
	StatusCode                                            int64
	RebuildNodeBalancerConfigDefaultApplicationJSONObject *RebuildNodeBalancerConfigDefaultApplicationJSON
}
