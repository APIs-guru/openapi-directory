package shared

type ConceptRelation struct {
	ConceptCreated *string `json:"concept_created"`
	ConceptID      *int64  `json:"concept_id"`
	ConceptName    *string `json:"concept_name"`
	ConceptStatus  *string `json:"concept_status"`
	ConceptType    *string `json:"concept_type"`
	ConceptUpdated *string `json:"concept_updated"`
	IsTimesTag     *int64  `json:"is_times_tag"`
	Vernacular     *string `json:"vernacular"`
}
