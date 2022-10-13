package shared

type SearchResult struct {
	ClusteredResults []SearchResult   `json:"clusteredResults"`
	DebugInfo        *ResultDebugInfo `json:"debugInfo"`
	Metadata         *Metadata        `json:"metadata"`
	Snippet          *Snippet         `json:"snippet"`
	Title            *string          `json:"title"`
	URL              *string          `json:"url"`
}
