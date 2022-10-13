package shared

type ListJobsResponse struct {
	APIVersion    *string   `json:"apiVersion"`
	Items         []Job     `json:"items"`
	Kind          *string   `json:"kind"`
	Metadata      *ListMeta `json:"metadata"`
	NextPageToken *string   `json:"nextPageToken"`
	Unreachable   []string  `json:"unreachable"`
}
