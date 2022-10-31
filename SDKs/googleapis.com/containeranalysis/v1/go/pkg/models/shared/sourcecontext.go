package shared



type SourceContext struct {
    CloudRepo *CloudRepoSourceContext `json:"cloudRepo,omitempty"`
    Gerrit *GerritSourceContext `json:"gerrit,omitempty"`
    Git *GitSourceContext `json:"git,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    
}

