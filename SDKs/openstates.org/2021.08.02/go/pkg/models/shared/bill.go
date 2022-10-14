package shared

import (
	"time"
)

type Bill struct {
	Abstracts               []BillAbstract          `json:"abstracts,omitempty"`
	Actions                 []BillAction            `json:"actions,omitempty"`
	Classification          []string                `json:"classification,omitempty"`
	CreatedAt               time.Time               `json:"created_at"`
	Documents               []BillDocumentOrVersion `json:"documents,omitempty"`
	Extras                  map[string]interface{}  `json:"extras,omitempty"`
	FirstActionDate         *string                 `json:"first_action_date,omitempty"`
	FromOrganization        Organization            `json:"from_organization"`
	ID                      string                  `json:"id"`
	Identifier              string                  `json:"identifier"`
	Jurisdiction            CompactJurisdiction     `json:"jurisdiction"`
	LatestActionDate        *string                 `json:"latest_action_date,omitempty"`
	LatestActionDescription *string                 `json:"latest_action_description,omitempty"`
	LatestPassageDate       *string                 `json:"latest_passage_date,omitempty"`
	OpenstatesURL           string                  `json:"openstates_url"`
	OtherIdentifiers        []BillIdentifier        `json:"other_identifiers,omitempty"`
	OtherTitles             []BillTitle             `json:"other_titles,omitempty"`
	Session                 string                  `json:"session"`
	Sources                 []Link                  `json:"sources,omitempty"`
	Sponsorships            []BillSponsorship       `json:"sponsorships,omitempty"`
	Subject                 []string                `json:"subject,omitempty"`
	Title                   string                  `json:"title"`
	UpdatedAt               time.Time               `json:"updated_at"`
	Versions                []BillDocumentOrVersion `json:"versions,omitempty"`
	Votes                   []VoteEvent             `json:"votes,omitempty"`
}
