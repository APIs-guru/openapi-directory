package shared

type SourceContext struct {
	CloudRepo      *CloudRepoSourceContext      `json:"cloudRepo"`
	CloudWorkspace *CloudWorkspaceSourceContext `json:"cloudWorkspace"`
	Gerrit         *GerritSourceContext         `json:"gerrit"`
	Git            *GitSourceContext            `json:"git"`
}
