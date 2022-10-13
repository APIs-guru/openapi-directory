package shared

type ListFindingsResponse struct {
	Findings      []GoogleCloudSecuritycenterV1beta1Finding `json:"findings"`
	NextPageToken *string                                   `json:"nextPageToken"`
	ReadTime      *string                                   `json:"readTime"`
	TotalSize     *int32                                    `json:"totalSize"`
}
