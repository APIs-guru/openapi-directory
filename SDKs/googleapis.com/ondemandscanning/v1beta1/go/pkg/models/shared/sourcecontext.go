package shared

type SourceContext struct {
	CloudRepo *CloudRepoSourceContext `json:"cloudRepo"`
	Gerrit    *GerritSourceContext    `json:"gerrit"`
	Git       *GitSourceContext       `json:"git"`
	Labels    map[string]string       `json:"labels"`
}
