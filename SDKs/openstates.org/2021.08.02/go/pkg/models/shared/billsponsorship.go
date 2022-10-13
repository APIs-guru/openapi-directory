package shared

type BillSponsorship struct {
	Classification string         `json:"classification"`
	EntityType     string         `json:"entity_type"`
	Name           string         `json:"name"`
	Organization   *Organization  `json:"organization"`
	Person         *CompactPerson `json:"person"`
	Primary        bool           `json:"primary"`
}
