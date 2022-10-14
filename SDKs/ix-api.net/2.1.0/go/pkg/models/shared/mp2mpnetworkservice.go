package shared

import (
	"time"
)

type Mp2MpNetworkServiceStateEnum string

const (
	Mp2MpNetworkServiceStateEnumRequested               Mp2MpNetworkServiceStateEnum = "requested"
	Mp2MpNetworkServiceStateEnumAllocated               Mp2MpNetworkServiceStateEnum = "allocated"
	Mp2MpNetworkServiceStateEnumTesting                 Mp2MpNetworkServiceStateEnum = "testing"
	Mp2MpNetworkServiceStateEnumProduction              Mp2MpNetworkServiceStateEnum = "production"
	Mp2MpNetworkServiceStateEnumProductionChangePending Mp2MpNetworkServiceStateEnum = "production_change_pending"
	Mp2MpNetworkServiceStateEnumDecommissionRequested   Mp2MpNetworkServiceStateEnum = "decommission_requested"
	Mp2MpNetworkServiceStateEnumDecommissioned          Mp2MpNetworkServiceStateEnum = "decommissioned"
	Mp2MpNetworkServiceStateEnumArchived                Mp2MpNetworkServiceStateEnum = "archived"
	Mp2MpNetworkServiceStateEnumError                   Mp2MpNetworkServiceStateEnum = "error"
	Mp2MpNetworkServiceStateEnumOperator                Mp2MpNetworkServiceStateEnum = "operator"
	Mp2MpNetworkServiceStateEnumScheduled               Mp2MpNetworkServiceStateEnum = "scheduled"
)

type Mp2MpNetworkService struct {
	BillingAccount          string                       `json:"billing_account"`
	ChargedUntil            *time.Time                   `json:"charged_until,omitempty"`
	ConsumingAccount        string                       `json:"consuming_account"`
	ContractRef             *string                      `json:"contract_ref,omitempty"`
	DecommissionAt          *time.Time                   `json:"decommission_at,omitempty"`
	ExternalRef             *string                      `json:"external_ref,omitempty"`
	ID                      string                       `json:"id"`
	ManagingAccount         string                       `json:"managing_account"`
	MemberJoiningRules      []string                     `json:"member_joining_rules"`
	Name                    string                       `json:"name"`
	NetworkFeatures         []string                     `json:"network_features"`
	NscRequiredContactRoles []string                     `json:"nsc_required_contact_roles,omitempty"`
	ProductOffering         string                       `json:"product_offering"`
	Public                  *bool                        `json:"public,omitempty"`
	PurchaseOrder           *string                      `json:"purchase_order,omitempty"`
	State                   Mp2MpNetworkServiceStateEnum `json:"state"`
	Status                  []Status                     `json:"status,omitempty"`
	Type                    string                       `json:"type"`
}
