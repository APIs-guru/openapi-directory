package shared

// ListRuntimeVersionsResponse
// Response for ListRuntimeVersions.
type ListRuntimeVersionsResponse struct {
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	RuntimeVersions []RuntimeVersion `json:"runtimeVersions,omitempty"`
	Unreachable     []string         `json:"unreachable,omitempty"`
}
