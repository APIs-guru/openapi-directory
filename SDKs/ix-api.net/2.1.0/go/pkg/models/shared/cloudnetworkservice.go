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
	Capacity                *int64                       `json:"capacity,omitempty"`
	ChargedUntil            *time.Time                   `json:"charged_until,omitempty"`
	CloudKey                string                       `json:"cloud_key"`
	ConsumingAccount        string                       `json:"consuming_account"`
	ContractRef             *string                      `json:"contract_ref,omitempty"`
	DecommissionAt          *time.Time                   `json:"decommission_at,omitempty"`
	Diversity               int64                        `json:"diversity"`
	ExternalRef             *string                      `json:"external_ref,omitempty"`
	ID                      string                       `json:"id"`
	ManagingAccount         string                       `json:"managing_account"`
	NscRequiredContactRoles []string                     `json:"nsc_required_contact_roles,omitempty"`
	ProductOffering         string                       `json:"product_offering"`
	ProviderRef             string                       `json:"provider_ref"`
	PurchaseOrder           *string                      `json:"purchase_order,omitempty"`
	State                   CloudNetworkServiceStateEnum `json:"state"`
	Status                  []Status                     `json:"status,omitempty"`
	Type                    string                       `json:"type"`
}
