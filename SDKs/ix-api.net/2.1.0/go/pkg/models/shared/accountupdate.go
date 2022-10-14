package shared

type AccountUpdate struct {
	Address                  Address             `json:"address"`
	BillingInformation       *BillingInformation `json:"billing_information,omitempty"`
	Discoverable             *bool               `json:"discoverable,omitempty"`
	ExternalRef              *string             `json:"external_ref,omitempty"`
	LegalName                *string             `json:"legal_name,omitempty"`
	ManagingAccount          *string             `json:"managing_account,omitempty"`
	MetroAreaNetworkPresence []string            `json:"metro_area_network_presence"`
	Name                     string              `json:"name"`
}
