package shared

type NetworkPolicyProviderEnum string

const (
	NetworkPolicyProviderEnumProviderUnspecified NetworkPolicyProviderEnum = "PROVIDER_UNSPECIFIED"
	NetworkPolicyProviderEnumCalico              NetworkPolicyProviderEnum = "CALICO"
)

// NetworkPolicy
// Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
type NetworkPolicy struct {
	Enabled  *bool                      `json:"enabled,omitempty"`
	Provider *NetworkPolicyProviderEnum `json:"provider,omitempty"`
}
