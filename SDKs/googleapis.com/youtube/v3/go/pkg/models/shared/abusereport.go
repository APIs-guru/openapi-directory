package shared

type AbuseReport struct {
	AbuseTypes      []AbuseType     `json:"abuseTypes,omitempty"`
	Description     *string         `json:"description,omitempty"`
	RelatedEntities []RelatedEntity `json:"relatedEntities,omitempty"`
	Subject         *Entity         `json:"subject,omitempty"`
}
