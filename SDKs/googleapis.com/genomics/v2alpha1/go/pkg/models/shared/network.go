package shared

type Network struct {
	Name              *string `json:"name"`
	Subnetwork        *string `json:"subnetwork"`
	UsePrivateAddress *bool   `json:"usePrivateAddress"`
}
