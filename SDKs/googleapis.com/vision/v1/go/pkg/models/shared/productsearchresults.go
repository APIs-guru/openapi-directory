package shared

type ProductSearchResults struct {
	IndexTime             *string         `json:"indexTime,omitempty"`
	ProductGroupedResults []GroupedResult `json:"productGroupedResults,omitempty"`
	Results               []Result        `json:"results,omitempty"`
}
