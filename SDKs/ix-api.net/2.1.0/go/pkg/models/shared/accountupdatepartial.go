package shared

type AccountUpdatePartial struct {
	Address                  *Address            `json:"address"`
	BillingInformation       *BillingInformation `json:"billing_information"`
	Discoverable             *bool               `json:"discoverable"`
	ExternalRef              *string             `json:"external_ref"`
	LegalName                *string             `json:"legal_name"`
	ManagingAccount          *string             `json:"managing_account"`
	MetroAreaNetworkPresence []string            `json:"metro_area_network_presence"`
	Name                     *string             `json:"name"`
}
