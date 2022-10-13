package shared

type GroupAssetsResponse struct {
	GroupByResults []GroupResult `json:"groupByResults"`
	NextPageToken  *string       `json:"nextPageToken"`
	ReadTime       *string       `json:"readTime"`
}
