package shared

import (
	"time"
)

type Person struct {
	BirthDate        string                 `json:"birth_date"`
	CreatedAt        time.Time              `json:"created_at"`
	CurrentRole      *CurrentRole           `json:"current_role"`
	DeathDate        string                 `json:"death_date"`
	Email            string                 `json:"email"`
	Extras           map[string]interface{} `json:"extras"`
	FamilyName       string                 `json:"family_name"`
	Gender           string                 `json:"gender"`
	GivenName        string                 `json:"given_name"`
	ID               string                 `json:"id"`
	Image            string                 `json:"image"`
	Jurisdiction     CompactJurisdiction    `json:"jurisdiction"`
	Links            []Link                 `json:"links"`
	Name             string                 `json:"name"`
	Offices          []Office               `json:"offices"`
	OpenstatesURL    string                 `json:"openstates_url"`
	OtherIdentifiers []AltIdentifier        `json:"other_identifiers"`
	OtherNames       []AltName              `json:"other_names"`
	Party            string                 `json:"party"`
	Sources          []Link                 `json:"sources"`
	UpdatedAt        time.Time              `json:"updated_at"`
}
