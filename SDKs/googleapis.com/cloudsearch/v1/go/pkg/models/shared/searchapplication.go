package shared

type SearchApplication struct {
	DataSourceRestrictions    []DataSourceRestriction    `json:"dataSourceRestrictions"`
	DefaultFacetOptions       []FacetOptions             `json:"defaultFacetOptions"`
	DefaultSortOptions        *SortOptions               `json:"defaultSortOptions"`
	DisplayName               *string                    `json:"displayName"`
	EnableAuditLog            *bool                      `json:"enableAuditLog"`
	Name                      *string                    `json:"name"`
	OperationIds              []string                   `json:"operationIds"`
	QueryInterpretationConfig *QueryInterpretationConfig `json:"queryInterpretationConfig"`
	ReturnResultThumbnailUrls *bool                      `json:"returnResultThumbnailUrls"`
	ScoringConfig             *ScoringConfig             `json:"scoringConfig"`
	SourceConfig              []SourceConfig             `json:"sourceConfig"`
}
