package shared

// SourceContext
// A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
type SourceContext struct {
	CloudRepo      *CloudRepoSourceContext      `json:"cloudRepo,omitempty"`
	CloudWorkspace *CloudWorkspaceSourceContext `json:"cloudWorkspace,omitempty"`
	Gerrit         *GerritSourceContext         `json:"gerrit,omitempty"`
	Git            *GitSourceContext            `json:"git,omitempty"`
}
