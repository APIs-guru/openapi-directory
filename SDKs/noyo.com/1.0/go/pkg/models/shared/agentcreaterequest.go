package shared

import (
	"time"
)

// AgentCreateRequestAgentDetails
// Details about the agent
type AgentCreateRequestAgentDetails struct {
	FirstName              *string `json:"first_name,omitempty"`
	LastName               *string `json:"last_name,omitempty"`
	LicenseNumber          *string `json:"license_number,omitempty"`
	NationalProducerNumber *string `json:"national_producer_number,omitempty"`
	TaxIDNumber            *string `json:"tax_id_number,omitempty"`
}

type AgentCreateRequest struct {
	AgencyDetails        *AgencyDetails                  `json:"agency_details,omitempty"`
	AgentDetails         *AgentCreateRequestAgentDetails `json:"agent_details,omitempty"`
	CommissionDetails    []SplitCommissionDetails        `json:"commission_details,omitempty"`
	GeneralAgencyDetails *GeneralAgencyDetails           `json:"general_agency_details,omitempty"`
	LicenseNumber        *string                         `json:"license_number,omitempty"`
	SignatureDate        *time.Time                      `json:"signature_date,omitempty"`
}
