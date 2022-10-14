package shared

type BillSponsorship struct {
	Classification string         `json:"classification"`
	EntityType     string         `json:"entity_type"`
	Name           string         `json:"name"`
	Organization   *Organization  `json:"organization,omitempty"`
	Person         *CompactPerson `json:"person,omitempty"`
	Primary        bool           `json:"primary"`
}
