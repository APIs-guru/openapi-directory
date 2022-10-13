package shared

import (
	"time"
)

type P2MpNetworkServiceStateEnum string

const (
	P2MpNetworkServiceStateEnumRequested               P2MpNetworkServiceStateEnum = "requested"
	P2MpNetworkServiceStateEnumAllocated               P2MpNetworkServiceStateEnum = "allocated"
	P2MpNetworkServiceStateEnumTesting                 P2MpNetworkServiceStateEnum = "testing"
	P2MpNetworkServiceStateEnumProduction              P2MpNetworkServiceStateEnum = "production"
	P2MpNetworkServiceStateEnumProductionChangePending P2MpNetworkServiceStateEnum = "production_change_pending"
	P2MpNetworkServiceStateEnumDecommissionRequested   P2MpNetworkServiceStateEnum = "decommission_requested"
	P2MpNetworkServiceStateEnumDecommissioned          P2MpNetworkServiceStateEnum = "decommissioned"
	P2MpNetworkServiceStateEnumArchived                P2MpNetworkServiceStateEnum = "archived"
	P2MpNetworkServiceStateEnumError                   P2MpNetworkServiceStateEnum = "error"
	P2MpNetworkServiceStateEnumOperator                P2MpNetworkServiceStateEnum = "operator"
	P2MpNetworkServiceStateEnumScheduled               P2MpNetworkServiceStateEnum = "scheduled"
)

type P2MpNetworkService struct {
	BillingAccount          string                      `json:"billing_account"`
	ChargedUntil            *time.Time                  `json:"charged_until"`
	ConsumingAccount        string                      `json:"consuming_account"`
	ContractRef             *string                     `json:"contract_ref"`
	DecommissionAt          *time.Time                  `json:"decommission_at"`
	ExternalRef             *string                     `json:"external_ref"`
	ID                      string                      `json:"id"`
	ManagingAccount         string                      `json:"managing_account"`
	MemberJoiningRules      []string                    `json:"member_joining_rules"`
	Name                    string                      `json:"name"`
	NetworkFeatures         []string                    `json:"network_features"`
	NscRequiredContactRoles []string                    `json:"nsc_required_contact_roles"`
	ProductOffering         string                      `json:"product_offering"`
	Public                  *bool                       `json:"public"`
	PurchaseOrder           *string                     `json:"purchase_order"`
	State                   P2MpNetworkServiceStateEnum `json:"state"`
	Status                  []Status                    `json:"status"`
	Type                    string                      `json:"type"`
}
