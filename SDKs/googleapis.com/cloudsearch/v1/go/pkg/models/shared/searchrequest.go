package shared

type SearchRequest struct {
	ContextAttributes          []ContextAttribute          `json:"contextAttributes,omitempty"`
	DataSourceRestrictions     []DataSourceRestriction     `json:"dataSourceRestrictions,omitempty"`
	FacetOptions               []FacetOptions              `json:"facetOptions,omitempty"`
	PageSize                   *int32                      `json:"pageSize,omitempty"`
	Query                      *string                     `json:"query,omitempty"`
	QueryInterpretationOptions *QueryInterpretationOptions `json:"queryInterpretationOptions,omitempty"`
	RequestOptions             *RequestOptions             `json:"requestOptions,omitempty"`
	SortOptions                *SortOptions                `json:"sortOptions,omitempty"`
	Start                      *int32                      `json:"start,omitempty"`
}
