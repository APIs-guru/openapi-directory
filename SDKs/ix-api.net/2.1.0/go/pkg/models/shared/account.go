package shared

type AccountStateEnum string

const (
	AccountStateEnumRequested               AccountStateEnum = "requested"
	AccountStateEnumAllocated               AccountStateEnum = "allocated"
	AccountStateEnumTesting                 AccountStateEnum = "testing"
	AccountStateEnumProduction              AccountStateEnum = "production"
	AccountStateEnumProductionChangePending AccountStateEnum = "production_change_pending"
	AccountStateEnumDecommissionRequested   AccountStateEnum = "decommission_requested"
	AccountStateEnumDecommissioned          AccountStateEnum = "decommissioned"
	AccountStateEnumArchived                AccountStateEnum = "archived"
	AccountStateEnumError                   AccountStateEnum = "error"
	AccountStateEnumOperator                AccountStateEnum = "operator"
	AccountStateEnumScheduled               AccountStateEnum = "scheduled"
)

type Account struct {
	Address                  *Address            `json:"address,omitempty"`
	BillingInformation       *BillingInformation `json:"billing_information,omitempty"`
	Discoverable             *bool               `json:"discoverable,omitempty"`
	ExternalRef              *string             `json:"external_ref,omitempty"`
	ID                       string              `json:"id"`
	LegalName                *string             `json:"legal_name,omitempty"`
	ManagingAccount          *string             `json:"managing_account,omitempty"`
	MetroAreaNetworkPresence []string            `json:"metro_area_network_presence"`
	Name                     string              `json:"name"`
	State                    AccountStateEnum    `json:"state"`
	Status                   []Status            `json:"status,omitempty"`
}
