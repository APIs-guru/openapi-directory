package shared



type GroupFindingsResponse struct {
    GroupByResults []GroupResult `json:"groupByResults,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ReadTime *string `json:"readTime,omitempty"`
    
}

