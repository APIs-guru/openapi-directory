package shared

type ListCaPoolsResponse struct {
	CaPools       []CaPool `json:"caPools"`
	NextPageToken *string  `json:"nextPageToken"`
	Unreachable   []string `json:"unreachable"`
}
