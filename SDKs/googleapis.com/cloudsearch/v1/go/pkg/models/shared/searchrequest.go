package shared

type SearchRequest struct {
	ContextAttributes          []ContextAttribute          `json:"contextAttributes"`
	DataSourceRestrictions     []DataSourceRestriction     `json:"dataSourceRestrictions"`
	FacetOptions               []FacetOptions              `json:"facetOptions"`
	PageSize                   *int32                      `json:"pageSize"`
	Query                      *string                     `json:"query"`
	QueryInterpretationOptions *QueryInterpretationOptions `json:"queryInterpretationOptions"`
	RequestOptions             *RequestOptions             `json:"requestOptions"`
	SortOptions                *SortOptions                `json:"sortOptions"`
	Start                      *int32                      `json:"start"`
}
