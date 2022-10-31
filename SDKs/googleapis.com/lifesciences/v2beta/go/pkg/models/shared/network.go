package shared

type Network struct {
	Network           *string `json:"network,omitempty"`
	Subnetwork        *string `json:"subnetwork,omitempty"`
	UsePrivateAddress *bool   `json:"usePrivateAddress,omitempty"`
}
