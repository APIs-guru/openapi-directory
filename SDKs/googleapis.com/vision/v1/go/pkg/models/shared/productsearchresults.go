package shared

type ProductSearchResults struct {
	IndexTime             *string         `json:"indexTime"`
	ProductGroupedResults []GroupedResult `json:"productGroupedResults"`
	Results               []Result        `json:"results"`
}
