package shared



type ConceptRelation struct {
    ConceptCreated *string `json:"concept_created,omitempty"`
    ConceptID *int64 `json:"concept_id,omitempty"`
    ConceptName *string `json:"concept_name,omitempty"`
    ConceptStatus *string `json:"concept_status,omitempty"`
    ConceptType *string `json:"concept_type,omitempty"`
    ConceptUpdated *string `json:"concept_updated,omitempty"`
    IsTimesTag *int64 `json:"is_times_tag,omitempty"`
    Vernacular *string `json:"vernacular,omitempty"`
    
}

