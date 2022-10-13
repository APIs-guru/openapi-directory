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
	Address                  *Address            `json:"address"`
	BillingInformation       *BillingInformation `json:"billing_information"`
	Discoverable             *bool               `json:"discoverable"`
	ExternalRef              *string             `json:"external_ref"`
	ID                       string              `json:"id"`
	LegalName                *string             `json:"legal_name"`
	ManagingAccount          *string             `json:"managing_account"`
	MetroAreaNetworkPresence []string            `json:"metro_area_network_presence"`
	Name                     string              `json:"name"`
	State                    AccountStateEnum    `json:"state"`
	Status                   []Status            `json:"status"`
}
