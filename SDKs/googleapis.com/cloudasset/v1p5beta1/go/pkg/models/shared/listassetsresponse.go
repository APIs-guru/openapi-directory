package shared

type ListAssetsResponse struct {
	Assets        []Asset `json:"assets"`
	NextPageToken *string `json:"nextPageToken"`
	ReadTime      *string `json:"readTime"`
}
