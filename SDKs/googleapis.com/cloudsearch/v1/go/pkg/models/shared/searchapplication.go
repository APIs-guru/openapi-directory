package shared

// SearchApplication
// SearchApplication
type SearchApplication struct {
	DataSourceRestrictions    []DataSourceRestriction    `json:"dataSourceRestrictions,omitempty"`
	DefaultFacetOptions       []FacetOptions             `json:"defaultFacetOptions,omitempty"`
	DefaultSortOptions        *SortOptions               `json:"defaultSortOptions,omitempty"`
	DisplayName               *string                    `json:"displayName,omitempty"`
	EnableAuditLog            *bool                      `json:"enableAuditLog,omitempty"`
	Name                      *string                    `json:"name,omitempty"`
	OperationIds              []string                   `json:"operationIds,omitempty"`
	QueryInterpretationConfig *QueryInterpretationConfig `json:"queryInterpretationConfig,omitempty"`
	ReturnResultThumbnailUrls *bool                      `json:"returnResultThumbnailUrls,omitempty"`
	ScoringConfig             *ScoringConfig             `json:"scoringConfig,omitempty"`
	SourceConfig              []SourceConfig             `json:"sourceConfig,omitempty"`
}

// SearchApplicationInput
// SearchApplication
type SearchApplicationInput struct {
	DataSourceRestrictions    []DataSourceRestriction    `json:"dataSourceRestrictions,omitempty"`
	DefaultFacetOptions       []FacetOptions             `json:"defaultFacetOptions,omitempty"`
	DefaultSortOptions        *SortOptions               `json:"defaultSortOptions,omitempty"`
	DisplayName               *string                    `json:"displayName,omitempty"`
	EnableAuditLog            *bool                      `json:"enableAuditLog,omitempty"`
	Name                      *string                    `json:"name,omitempty"`
	QueryInterpretationConfig *QueryInterpretationConfig `json:"queryInterpretationConfig,omitempty"`
	ReturnResultThumbnailUrls *bool                      `json:"returnResultThumbnailUrls,omitempty"`
	ScoringConfig             *ScoringConfig             `json:"scoringConfig,omitempty"`
	SourceConfig              []SourceConfig             `json:"sourceConfig,omitempty"`
}
