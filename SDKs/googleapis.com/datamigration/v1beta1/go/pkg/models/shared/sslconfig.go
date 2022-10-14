package shared

type SslConfigTypeEnum string

const (
	SslConfigTypeEnumSslTypeUnspecified SslConfigTypeEnum = "SSL_TYPE_UNSPECIFIED"
	SslConfigTypeEnumServerOnly         SslConfigTypeEnum = "SERVER_ONLY"
	SslConfigTypeEnumServerClient       SslConfigTypeEnum = "SERVER_CLIENT"
)

type SslConfig struct {
	CaCertificate     *string            `json:"caCertificate,omitempty"`
	ClientCertificate *string            `json:"clientCertificate,omitempty"`
	ClientKey         *string            `json:"clientKey,omitempty"`
	Type              *SslConfigTypeEnum `json:"type,omitempty"`
}
