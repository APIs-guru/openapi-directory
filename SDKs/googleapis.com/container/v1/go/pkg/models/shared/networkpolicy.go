package shared

type NetworkPolicyProviderEnum string

const (
	NetworkPolicyProviderEnumProviderUnspecified NetworkPolicyProviderEnum = "PROVIDER_UNSPECIFIED"
	NetworkPolicyProviderEnumCalico              NetworkPolicyProviderEnum = "CALICO"
)

type NetworkPolicy struct {
	Enabled  *bool                      `json:"enabled"`
	Provider *NetworkPolicyProviderEnum `json:"provider"`
}
