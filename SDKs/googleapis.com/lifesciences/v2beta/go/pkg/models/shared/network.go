package shared

type Network struct {
	Network           *string `json:"network"`
	Subnetwork        *string `json:"subnetwork"`
	UsePrivateAddress *bool   `json:"usePrivateAddress"`
}
