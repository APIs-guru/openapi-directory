package shared

type SourceContext struct {
	CloudRepo      *CloudRepoSourceContext      `json:"cloudRepo,omitempty"`
	CloudWorkspace *CloudWorkspaceSourceContext `json:"cloudWorkspace,omitempty"`
	Gerrit         *GerritSourceContext         `json:"gerrit,omitempty"`
	Git            *GitSourceContext            `json:"git,omitempty"`
}
