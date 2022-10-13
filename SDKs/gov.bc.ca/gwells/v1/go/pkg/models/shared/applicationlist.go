package shared

import (
	"time"
)

type ApplicationList struct {
	CertAuthority  *string                `json:"cert_authority"`
	Certificate    *string                `json:"certificate"`
	CurrentStatus  *ApplicationStatusCode `json:"current_status"`
	DisplayStatus  *string                `json:"display_status"`
	Qualifications []Qualification        `json:"qualifications"`
	RemovalDate    *time.Time             `json:"removal_date"`
	Subactivity    Subactivity            `json:"subactivity"`
}
