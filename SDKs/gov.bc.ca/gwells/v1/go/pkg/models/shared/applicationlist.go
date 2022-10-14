package shared

import (
	"time"
)

type ApplicationList struct {
	CertAuthority  *string                `json:"cert_authority,omitempty"`
	Certificate    *string                `json:"certificate,omitempty"`
	CurrentStatus  *ApplicationStatusCode `json:"current_status,omitempty"`
	DisplayStatus  *string                `json:"display_status,omitempty"`
	Qualifications []Qualification        `json:"qualifications,omitempty"`
	RemovalDate    *time.Time             `json:"removal_date,omitempty"`
	Subactivity    Subactivity            `json:"subactivity"`
}
