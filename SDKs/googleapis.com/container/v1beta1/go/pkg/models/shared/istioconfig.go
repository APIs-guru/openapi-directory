package shared




type IstioConfigAuthEnum string

const (
    IstioConfigAuthEnumAuthNone IstioConfigAuthEnum = "AUTH_NONE"
IstioConfigAuthEnumAuthMutualTLS IstioConfigAuthEnum = "AUTH_MUTUAL_TLS"
)


type IstioConfig struct {
    Auth *IstioConfigAuthEnum `json:"auth,omitempty"`
    Disabled *bool `json:"disabled,omitempty"`
    
}

