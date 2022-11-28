package shared

// CloudWorkspaceID
// A CloudWorkspaceId is a unique identifier for a cloud workspace. A cloud workspace is a place associated with a repo where modified files can be stored before they are committed.
type CloudWorkspaceID struct {
	Name   *string `json:"name,omitempty"`
	RepoID *RepoID `json:"repoId,omitempty"`
}
