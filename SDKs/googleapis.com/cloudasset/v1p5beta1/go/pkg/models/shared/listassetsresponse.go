package shared

type ListAssetsResponse struct {
	Assets        []Asset `json:"assets,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
	ReadTime      *string `json:"readTime,omitempty"`
}
