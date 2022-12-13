package shared

import (
	"time"
)

// AgentResultAgentDetails
// Details about the agent
type AgentResultAgentDetails struct {
	FirstName              *string `json:"first_name,omitempty"`
	LastName               *string `json:"last_name,omitempty"`
	LicenseNumber          *string `json:"license_number,omitempty"`
	NationalProducerNumber *string `json:"national_producer_number,omitempty"`
	TaxIDNumber            *string `json:"tax_id_number,omitempty"`
}

type AgentResult struct {
	AgencyDetails        AgencyDetails            `json:"agency_details"`
	AgentDetails         AgentResultAgentDetails  `json:"agent_details"`
	CommissionDetails    []SplitCommissionDetails `json:"commission_details"`
	Created              int64                    `json:"created"`
	GeneralAgencyDetails GeneralAgencyDetails     `json:"general_agency_details"`
	ID                   string                   `json:"id"`
	LicenseNumber        string                   `json:"license_number"`
	Modified             int64                    `json:"modified"`
	SignatureDate        time.Time                `json:"signature_date"`
	Version              string                   `json:"version"`
}
