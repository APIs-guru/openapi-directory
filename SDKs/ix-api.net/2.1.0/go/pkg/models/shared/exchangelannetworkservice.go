package shared

type ExchangeLanNetworkServiceStateEnum string

const (
	ExchangeLanNetworkServiceStateEnumRequested               ExchangeLanNetworkServiceStateEnum = "requested"
	ExchangeLanNetworkServiceStateEnumAllocated               ExchangeLanNetworkServiceStateEnum = "allocated"
	ExchangeLanNetworkServiceStateEnumTesting                 ExchangeLanNetworkServiceStateEnum = "testing"
	ExchangeLanNetworkServiceStateEnumProduction              ExchangeLanNetworkServiceStateEnum = "production"
	ExchangeLanNetworkServiceStateEnumProductionChangePending ExchangeLanNetworkServiceStateEnum = "production_change_pending"
	ExchangeLanNetworkServiceStateEnumDecommissionRequested   ExchangeLanNetworkServiceStateEnum = "decommission_requested"
	ExchangeLanNetworkServiceStateEnumDecommissioned          ExchangeLanNetworkServiceStateEnum = "decommissioned"
	ExchangeLanNetworkServiceStateEnumArchived                ExchangeLanNetworkServiceStateEnum = "archived"
	ExchangeLanNetworkServiceStateEnumError                   ExchangeLanNetworkServiceStateEnum = "error"
	ExchangeLanNetworkServiceStateEnumOperator                ExchangeLanNetworkServiceStateEnum = "operator"
	ExchangeLanNetworkServiceStateEnumScheduled               ExchangeLanNetworkServiceStateEnum = "scheduled"
)

type ExchangeLanNetworkService struct {
	ConsumingAccount        string                             `json:"consuming_account"`
	ExternalRef             *string                            `json:"external_ref"`
	ID                      string                             `json:"id"`
	IxfdbIxid               *int64                             `json:"ixfdb_ixid"`
	ManagingAccount         string                             `json:"managing_account"`
	MetroAreaNetwork        string                             `json:"metro_area_network"`
	Name                    string                             `json:"name"`
	NetworkFeatures         []string                           `json:"network_features"`
	NscRequiredContactRoles []string                           `json:"nsc_required_contact_roles"`
	PeeringdbIxid           *int64                             `json:"peeringdb_ixid"`
	ProductOffering         *string                            `json:"product_offering"`
	State                   ExchangeLanNetworkServiceStateEnum `json:"state"`
	Status                  []Status                           `json:"status"`
	SubnetV4                string                             `json:"subnet_v4"`
	SubnetV6                string                             `json:"subnet_v6"`
	Type                    string                             `json:"type"`
}
