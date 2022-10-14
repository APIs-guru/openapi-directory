package shared

type AccountUpdatePartial struct {
	Address                  *Address            `json:"address,omitempty"`
	BillingInformation       *BillingInformation `json:"billing_information,omitempty"`
	Discoverable             *bool               `json:"discoverable,omitempty"`
	ExternalRef              *string             `json:"external_ref,omitempty"`
	LegalName                *string             `json:"legal_name,omitempty"`
	ManagingAccount          *string             `json:"managing_account,omitempty"`
	MetroAreaNetworkPresence []string            `json:"metro_area_network_presence,omitempty"`
	Name                     *string             `json:"name,omitempty"`
}
