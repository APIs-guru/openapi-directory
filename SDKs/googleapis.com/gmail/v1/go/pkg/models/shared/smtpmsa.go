package shared

type SMTPMsaSecurityModeEnum string

const (
	SMTPMsaSecurityModeEnumSecurityModeUnspecified SMTPMsaSecurityModeEnum = "securityModeUnspecified"
	SMTPMsaSecurityModeEnumNone                    SMTPMsaSecurityModeEnum = "none"
	SMTPMsaSecurityModeEnumSsl                     SMTPMsaSecurityModeEnum = "ssl"
	SMTPMsaSecurityModeEnumStarttls                SMTPMsaSecurityModeEnum = "starttls"
)

type SMTPMsa struct {
	Host         *string                  `json:"host"`
	Password     *string                  `json:"password"`
	Port         *int32                   `json:"port"`
	SecurityMode *SMTPMsaSecurityModeEnum `json:"securityMode"`
	Username     *string                  `json:"username"`
}
