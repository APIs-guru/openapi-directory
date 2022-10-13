package shared

type Committee struct {
	Classification CommitteeClassificationEnum `json:"classification"`
	Extras         map[string]interface{}      `json:"extras"`
	ID             string                      `json:"id"`
	Links          []Link                      `json:"links"`
	Memberships    []CommitteeMembership       `json:"memberships"`
	Name           string                      `json:"name"`
	OtherNames     []AltName                   `json:"other_names"`
	ParentID       string                      `json:"parent_id"`
	Sources        []Link                      `json:"sources"`
}
