package shared

import (
	"time"
)

type P2PNetworkServiceStateEnum string

const (
	P2PNetworkServiceStateEnumRequested               P2PNetworkServiceStateEnum = "requested"
	P2PNetworkServiceStateEnumAllocated               P2PNetworkServiceStateEnum = "allocated"
	P2PNetworkServiceStateEnumTesting                 P2PNetworkServiceStateEnum = "testing"
	P2PNetworkServiceStateEnumProduction              P2PNetworkServiceStateEnum = "production"
	P2PNetworkServiceStateEnumProductionChangePending P2PNetworkServiceStateEnum = "production_change_pending"
	P2PNetworkServiceStateEnumDecommissionRequested   P2PNetworkServiceStateEnum = "decommission_requested"
	P2PNetworkServiceStateEnumDecommissioned          P2PNetworkServiceStateEnum = "decommissioned"
	P2PNetworkServiceStateEnumArchived                P2PNetworkServiceStateEnum = "archived"
	P2PNetworkServiceStateEnumError                   P2PNetworkServiceStateEnum = "error"
	P2PNetworkServiceStateEnumOperator                P2PNetworkServiceStateEnum = "operator"
	P2PNetworkServiceStateEnumScheduled               P2PNetworkServiceStateEnum = "scheduled"
)

type P2PNetworkService struct {
	BillingAccount          string                     `json:"billing_account"`
	Capacity                *int64                     `json:"capacity,omitempty"`
	ChargedUntil            *time.Time                 `json:"charged_until,omitempty"`
	ConsumingAccount        string                     `json:"consuming_account"`
	ContractRef             *string                    `json:"contract_ref,omitempty"`
	DecommissionAt          *time.Time                 `json:"decommission_at,omitempty"`
	ExternalRef             *string                    `json:"external_ref,omitempty"`
	ID                      string                     `json:"id"`
	JoiningMemberAccount    string                     `json:"joining_member_account"`
	ManagingAccount         string                     `json:"managing_account"`
	NscRequiredContactRoles []string                   `json:"nsc_required_contact_roles,omitempty"`
	ProductOffering         string                     `json:"product_offering"`
	PurchaseOrder           *string                    `json:"purchase_order,omitempty"`
	State                   P2PNetworkServiceStateEnum `json:"state"`
	Status                  []Status                   `json:"status,omitempty"`
	Type                    string                     `json:"type"`
}
