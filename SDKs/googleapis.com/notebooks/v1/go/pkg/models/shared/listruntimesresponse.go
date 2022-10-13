package shared

type ListRuntimesResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Runtimes      []Runtime `json:"runtimes"`
	Unreachable   []string  `json:"unreachable"`
}
