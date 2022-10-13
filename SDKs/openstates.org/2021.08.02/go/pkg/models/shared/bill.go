package shared

import (
	"time"
)

type Bill struct {
	Abstracts               []BillAbstract          `json:"abstracts"`
	Actions                 []BillAction            `json:"actions"`
	Classification          []string                `json:"classification"`
	CreatedAt               time.Time               `json:"created_at"`
	Documents               []BillDocumentOrVersion `json:"documents"`
	Extras                  map[string]interface{}  `json:"extras"`
	FirstActionDate         *string                 `json:"first_action_date"`
	FromOrganization        Organization            `json:"from_organization"`
	ID                      string                  `json:"id"`
	Identifier              string                  `json:"identifier"`
	Jurisdiction            CompactJurisdiction     `json:"jurisdiction"`
	LatestActionDate        *string                 `json:"latest_action_date"`
	LatestActionDescription *string                 `json:"latest_action_description"`
	LatestPassageDate       *string                 `json:"latest_passage_date"`
	OpenstatesURL           string                  `json:"openstates_url"`
	OtherIdentifiers        []BillIdentifier        `json:"other_identifiers"`
	OtherTitles             []BillTitle             `json:"other_titles"`
	Session                 string                  `json:"session"`
	Sources                 []Link                  `json:"sources"`
	Sponsorships            []BillSponsorship       `json:"sponsorships"`
	Subject                 []string                `json:"subject"`
	Title                   string                  `json:"title"`
	UpdatedAt               time.Time               `json:"updated_at"`
	Versions                []BillDocumentOrVersion `json:"versions"`
	Votes                   []VoteEvent             `json:"votes"`
}
