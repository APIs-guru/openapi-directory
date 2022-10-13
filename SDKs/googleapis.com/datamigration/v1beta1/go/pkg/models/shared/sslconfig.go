package shared

type SslConfigTypeEnum string

const (
	SslConfigTypeEnumSslTypeUnspecified SslConfigTypeEnum = "SSL_TYPE_UNSPECIFIED"
	SslConfigTypeEnumServerOnly         SslConfigTypeEnum = "SERVER_ONLY"
	SslConfigTypeEnumServerClient       SslConfigTypeEnum = "SERVER_CLIENT"
)

type SslConfig struct {
	CaCertificate     *string            `json:"caCertificate"`
	ClientCertificate *string            `json:"clientCertificate"`
	ClientKey         *string            `json:"clientKey"`
	Type              *SslConfigTypeEnum `json:"type"`
}
