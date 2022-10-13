package shared

type AbuseReport struct {
	AbuseTypes      []AbuseType     `json:"abuseTypes"`
	Description     *string         `json:"description"`
	RelatedEntities []RelatedEntity `json:"relatedEntities"`
	Subject         *Entity         `json:"subject"`
}
