package shared

type ListRuntimeVersionsResponse struct {
	NextPageToken   *string          `json:"nextPageToken"`
	RuntimeVersions []RuntimeVersion `json:"runtimeVersions"`
	Unreachable     []string         `json:"unreachable"`
}
