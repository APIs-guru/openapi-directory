package shared

type ConceptArticleListResultsConcepts struct {
	NytdDes []string `json:"nytd_des,omitempty"`
	NytdOrg []string `json:"nytd_org,omitempty"`
	NytdPer []string `json:"nytd_per,omitempty"`
}

type ConceptArticleListResults struct {
	Body           *string                            `json:"body,omitempty"`
	Byline         *string                            `json:"byline,omitempty"`
	Concepts       *ConceptArticleListResultsConcepts `json:"concepts,omitempty"`
	Date           *string                            `json:"date,omitempty"`
	DocumentType   *string                            `json:"document_type,omitempty"`
	Title          *string                            `json:"title,omitempty"`
	TypeOfMaterial *string                            `json:"type_of_material,omitempty"`
	URL            *string                            `json:"url,omitempty"`
}

type ConceptArticleList struct {
	Results []ConceptArticleListResults `json:"results,omitempty"`
	Total   *int64                      `json:"total,omitempty"`
}

type ConceptCombinations struct {
	CombinationNote              *string `json:"combination_note,omitempty"`
	CombinationSourceConceptID   *int64  `json:"combination_source_concept_id,omitempty"`
	CombinationSourceConceptName *string `json:"combination_source_concept_name,omitempty"`
	CombinationSourceConceptType *string `json:"combination_source_concept_type,omitempty"`
	CombinationTargetConceptID   *int64  `json:"combination_target_concept_id,omitempty"`
	CombinationTargetConceptName *string `json:"combination_target_concept_name,omitempty"`
	CombinationTargetConceptType *string `json:"combination_target_concept_type,omitempty"`
}

type ConceptLinks struct {
	ConceptID     *int64  `json:"concept_id,omitempty"`
	ConceptName   *string `json:"concept_name,omitempty"`
	ConceptStatus *string `json:"concept_status,omitempty"`
	ConceptType   *string `json:"concept_type,omitempty"`
	IsTimesTag    *int64  `json:"is_times_tag,omitempty"`
	Link          *string `json:"link,omitempty"`
	LinkID        *int64  `json:"link_id,omitempty"`
	LinkType      *string `json:"link_type,omitempty"`
	MappingType   *string `json:"mapping_type,omitempty"`
	Relation      *string `json:"relation,omitempty"`
}

type ConceptScopeNotes struct {
	ScopeNote     *string `json:"scope_note,omitempty"`
	ScopeNoteName *string `json:"scope_note_name,omitempty"`
	ScopeNoteType *string `json:"scope_note_type,omitempty"`
}

type ConceptTaxonomy struct {
	SourceConceptID             *int64  `json:"source_concept_id,omitempty"`
	SourceConceptName           *string `json:"source_concept_name,omitempty"`
	SourceConceptType           *string `json:"source_concept_type,omitempty"`
	SourceConceptVernacular     *string `json:"source_concept_vernacular,omitempty"`
	TargetConceptID             *int64  `json:"target_concept_id,omitempty"`
	TargetConceptName           *string `json:"target_concept_name,omitempty"`
	TargetConceptType           *string `json:"target_concept_type,omitempty"`
	TargetConceptVernacular     *string `json:"target_concept_vernacular,omitempty"`
	TaxonomicRelation           *string `json:"taxonomic_relation,omitempty"`
	TaxonomicVerificationStatus *string `json:"taxonomic_verification_status,omitempty"`
}

type Concept struct {
	Ancestors      []ConceptRelation     `json:"ancestors,omitempty"`
	ArticleList    *ConceptArticleList   `json:"article_list,omitempty"`
	Combinations   []ConceptCombinations `json:"combinations,omitempty"`
	ConceptCreated *string               `json:"concept_created,omitempty"`
	ConceptID      *int64                `json:"concept_id,omitempty"`
	ConceptName    *string               `json:"concept_name,omitempty"`
	ConceptStatus  *string               `json:"concept_status,omitempty"`
	ConceptType    *string               `json:"concept_type,omitempty"`
	ConceptUpdated *string               `json:"concept_updated,omitempty"`
	Descendants    []ConceptRelation     `json:"descendants,omitempty"`
	IsTimesTag     *int64                `json:"is_times_tag,omitempty"`
	Links          []ConceptLinks        `json:"links,omitempty"`
	ScopeNotes     []ConceptScopeNotes   `json:"scope_notes,omitempty"`
	SearchAPIQuery *string               `json:"search_api_query,omitempty"`
	Taxonomy       []ConceptTaxonomy     `json:"taxonomy,omitempty"`
	Vernacular     *string               `json:"vernacular,omitempty"`
}
