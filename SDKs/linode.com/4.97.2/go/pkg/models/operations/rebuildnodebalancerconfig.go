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
	Down *int64 `json:"down"`
	Up   *int64 `json:"up"`
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
	Algorithm      *RebuildNodeBalancerConfigRequestBodyAlgorithmEnum     `json:"algorithm"`
	Check          *RebuildNodeBalancerConfigRequestBodyCheckEnum         `json:"check"`
	CheckAttempts  *int64                                                 `json:"check_attempts"`
	CheckBody      *string                                                `json:"check_body"`
	CheckInterval  *int64                                                 `json:"check_interval"`
	CheckPassive   *bool                                                  `json:"check_passive"`
	CheckPath      *string                                                `json:"check_path"`
	CheckTimeout   *int64                                                 `json:"check_timeout"`
	CipherSuite    *RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum   `json:"cipher_suite"`
	ID             *int64                                                 `json:"id"`
	NodebalancerID *int64                                                 `json:"nodebalancer_id"`
	Nodes          []shared.NodeBalancerNode                              `json:"nodes"`
	NodesStatus    *RebuildNodeBalancerConfigRequestBodyNodesStatus       `json:"nodes_status"`
	Port           *int64                                                 `json:"port"`
	Protocol       *RebuildNodeBalancerConfigRequestBodyProtocolEnum      `json:"protocol"`
	ProxyProtocol  *RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum `json:"proxy_protocol"`
	SslCert        *string                                                `json:"ssl_cert"`
	SslCommonname  *string                                                `json:"ssl_commonname"`
	SslFingerprint *string                                                `json:"ssl_fingerprint"`
	SslKey         *string                                                `json:"ssl_key"`
	Stickiness     *RebuildNodeBalancerConfigRequestBodyStickinessEnum    `json:"stickiness"`
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
	Errors []shared.ErrorObject `json:"errors"`
}

type RebuildNodeBalancerConfigResponse struct {
	ContentType                                           string
	NodeBalancer                                          *shared.NodeBalancer
	StatusCode                                            int64
	RebuildNodeBalancerConfigDefaultApplicationJSONObject *RebuildNodeBalancerConfigDefaultApplicationJSON
}
