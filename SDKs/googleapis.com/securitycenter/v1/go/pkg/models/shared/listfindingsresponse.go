package shared

type ListFindingsResponse struct {
	ListFindingsResults []ListFindingsResult `json:"listFindingsResults"`
	NextPageToken       *string              `json:"nextPageToken"`
	ReadTime            *string              `json:"readTime"`
	TotalSize           *int32               `json:"totalSize"`
}
