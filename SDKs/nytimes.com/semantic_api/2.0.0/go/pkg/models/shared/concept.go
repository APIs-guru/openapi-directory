package shared

type ConceptArticleListResultsConcepts struct {
	NytdDes []string `json:"nytd_des"`
	NytdOrg []string `json:"nytd_org"`
	NytdPer []string `json:"nytd_per"`
}

type ConceptArticleListResults struct {
	Body           *string                            `json:"body"`
	Byline         *string                            `json:"byline"`
	Concepts       *ConceptArticleListResultsConcepts `json:"concepts"`
	Date           *string                            `json:"date"`
	DocumentType   *string                            `json:"document_type"`
	Title          *string                            `json:"title"`
	TypeOfMaterial *string                            `json:"type_of_material"`
	URL            *string                            `json:"url"`
}

type ConceptArticleList struct {
	Results []ConceptArticleListResults `json:"results"`
	Total   *int64                      `json:"total"`
}

type ConceptCombinations struct {
	CombinationNote              *string `json:"combination_note"`
	CombinationSourceConceptID   *int64  `json:"combination_source_concept_id"`
	CombinationSourceConceptName *string `json:"combination_source_concept_name"`
	CombinationSourceConceptType *string `json:"combination_source_concept_type"`
	CombinationTargetConceptID   *int64  `json:"combination_target_concept_id"`
	CombinationTargetConceptName *string `json:"combination_target_concept_name"`
	CombinationTargetConceptType *string `json:"combination_target_concept_type"`
}

type ConceptLinks struct {
	ConceptID     *int64  `json:"concept_id"`
	ConceptName   *string `json:"concept_name"`
	ConceptStatus *string `json:"concept_status"`
	ConceptType   *string `json:"concept_type"`
	IsTimesTag    *int64  `json:"is_times_tag"`
	Link          *string `json:"link"`
	LinkID        *int64  `json:"link_id"`
	LinkType      *string `json:"link_type"`
	MappingType   *string `json:"mapping_type"`
	Relation      *string `json:"relation"`
}

type ConceptScopeNotes struct {
	ScopeNote     *string `json:"scope_note"`
	ScopeNoteName *string `json:"scope_note_name"`
	ScopeNoteType *string `json:"scope_note_type"`
}

type ConceptTaxonomy struct {
	SourceConceptID             *int64  `json:"source_concept_id"`
	SourceConceptName           *string `json:"source_concept_name"`
	SourceConceptType           *string `json:"source_concept_type"`
	SourceConceptVernacular     *string `json:"source_concept_vernacular"`
	TargetConceptID             *int64  `json:"target_concept_id"`
	TargetConceptName           *string `json:"target_concept_name"`
	TargetConceptType           *string `json:"target_concept_type"`
	TargetConceptVernacular     *string `json:"target_concept_vernacular"`
	TaxonomicRelation           *string `json:"taxonomic_relation"`
	TaxonomicVerificationStatus *string `json:"taxonomic_verification_status"`
}

type Concept struct {
	Ancestors      []ConceptRelation     `json:"ancestors"`
	ArticleList    *ConceptArticleList   `json:"article_list"`
	Combinations   []ConceptCombinations `json:"combinations"`
	ConceptCreated *string               `json:"concept_created"`
	ConceptID      *int64                `json:"concept_id"`
	ConceptName    *string               `json:"concept_name"`
	ConceptStatus  *string               `json:"concept_status"`
	ConceptType    *string               `json:"concept_type"`
	ConceptUpdated *string               `json:"concept_updated"`
	Descendants    []ConceptRelation     `json:"descendants"`
	IsTimesTag     *int64                `json:"is_times_tag"`
	Links          []ConceptLinks        `json:"links"`
	ScopeNotes     []ConceptScopeNotes   `json:"scope_notes"`
	SearchAPIQuery *string               `json:"search_api_query"`
	Taxonomy       []ConceptTaxonomy     `json:"taxonomy"`
	Vernacular     *string               `json:"vernacular"`
}
