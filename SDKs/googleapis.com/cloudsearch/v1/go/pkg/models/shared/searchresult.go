package shared



type SearchResult struct {
    ClusteredResults []SearchResult `json:"clusteredResults,omitempty"`
    DebugInfo *ResultDebugInfo `json:"debugInfo,omitempty"`
    Metadata *Metadata `json:"metadata,omitempty"`
    Snippet *Snippet `json:"snippet,omitempty"`
    Title *string `json:"title,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

