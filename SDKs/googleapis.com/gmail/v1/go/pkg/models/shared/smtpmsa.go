package shared

type SMTPMsaSecurityModeEnum string

const (
	SMTPMsaSecurityModeEnumSecurityModeUnspecified SMTPMsaSecurityModeEnum = "securityModeUnspecified"
	SMTPMsaSecurityModeEnumNone                    SMTPMsaSecurityModeEnum = "none"
	SMTPMsaSecurityModeEnumSsl                     SMTPMsaSecurityModeEnum = "ssl"
	SMTPMsaSecurityModeEnumStarttls                SMTPMsaSecurityModeEnum = "starttls"
)

// SMTPMsa
// Configuration for communication with an SMTP service.
type SMTPMsa struct {
	Host         *string                  `json:"host,omitempty"`
	Password     *string                  `json:"password,omitempty"`
	Port         *int32                   `json:"port,omitempty"`
	SecurityMode *SMTPMsaSecurityModeEnum `json:"securityMode,omitempty"`
	Username     *string                  `json:"username,omitempty"`
}
