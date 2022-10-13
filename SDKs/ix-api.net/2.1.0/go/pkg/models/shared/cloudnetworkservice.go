package shared

import (
	"time"
)

type CloudNetworkServiceStateEnum string

const (
	CloudNetworkServiceStateEnumRequested               CloudNetworkServiceStateEnum = "requested"
	CloudNetworkServiceStateEnumAllocated               CloudNetworkServiceStateEnum = "allocated"
	CloudNetworkServiceStateEnumTesting                 CloudNetworkServiceStateEnum = "testing"
	CloudNetworkServiceStateEnumProduction              CloudNetworkServiceStateEnum = "production"
	CloudNetworkServiceStateEnumProductionChangePending CloudNetworkServiceStateEnum = "production_change_pending"
	CloudNetworkServiceStateEnumDecommissionRequested   CloudNetworkServiceStateEnum = "decommission_requested"
	CloudNetworkServiceStateEnumDecommissioned          CloudNetworkServiceStateEnum = "decommissioned"
	CloudNetworkServiceStateEnumArchived                CloudNetworkServiceStateEnum = "archived"
	CloudNetworkServiceStateEnumError                   CloudNetworkServiceStateEnum = "error"
	CloudNetworkServiceStateEnumOperator                CloudNetworkServiceStateEnum = "operator"
	CloudNetworkServiceStateEnumScheduled               CloudNetworkServiceStateEnum = "scheduled"
)

type CloudNetworkService struct {
	BillingAccount          string                       `json:"billing_account"`
	Capacity                *int64                       `json:"capacity"`
	ChargedUntil            *time.Time                   `json:"charged_until"`
	CloudKey                string                       `json:"cloud_key"`
	ConsumingAccount        string                       `json:"consuming_account"`
	ContractRef             *string                      `json:"contract_ref"`
	DecommissionAt          *time.Time                   `json:"decommission_at"`
	Diversity               int64                        `json:"diversity"`
	ExternalRef             *string                      `json:"external_ref"`
	ID                      string                       `json:"id"`
	ManagingAccount         string                       `json:"managing_account"`
	NscRequiredContactRoles []string                     `json:"nsc_required_contact_roles"`
	ProductOffering         string                       `json:"product_offering"`
	ProviderRef             string                       `json:"provider_ref"`
	PurchaseOrder           *string                      `json:"purchase_order"`
	State                   CloudNetworkServiceStateEnum `json:"state"`
	Status                  []Status                     `json:"status"`
	Type                    string                       `json:"type"`
}
