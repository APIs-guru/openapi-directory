package shared

type IstioConfigAuthEnum string

const (
	IstioConfigAuthEnumAuthNone      IstioConfigAuthEnum = "AUTH_NONE"
	IstioConfigAuthEnumAuthMutualTLS IstioConfigAuthEnum = "AUTH_MUTUAL_TLS"
)

type IstioConfig struct {
	Auth     *IstioConfigAuthEnum `json:"auth"`
	Disabled *bool                `json:"disabled"`
}
