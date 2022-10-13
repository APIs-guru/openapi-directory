package shared

type Facility struct {
	AddressCountry      string   `json:"address_country"`
	AddressLocality     string   `json:"address_locality"`
	AddressRegion       string   `json:"address_region"`
	ID                  string   `json:"id"`
	MetroArea           string   `json:"metro_area"`
	Name                string   `json:"name"`
	OrganisationName    string   `json:"organisation_name"`
	PeeringdbFacilityID *int32   `json:"peeringdb_facility_id"`
	Pops                []string `json:"pops"`
	PostalCode          string   `json:"postal_code"`
	StreetAddress       string   `json:"street_address"`
}
