package shared

import (
	"time"
)

type Provider struct {
	Account      *string                `json:"account"`
	AdminContact *string                `json:"admin_contact"`
	Asn          *int64                 `json:"asn"`
	CircuitCount *int64                 `json:"circuit_count"`
	Comments     *string                `json:"comments"`
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	ID           *int64                 `json:"id"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Name         string                 `json:"name"`
	NocContact   *string                `json:"noc_contact"`
	PortalURL    *string                `json:"portal_url"`
	Slug         string                 `json:"slug"`
	Tags         []string               `json:"tags"`
}
