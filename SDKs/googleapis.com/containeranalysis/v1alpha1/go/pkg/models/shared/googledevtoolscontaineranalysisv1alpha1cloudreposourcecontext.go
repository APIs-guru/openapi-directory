package shared

// GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext
// A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
type GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext struct {
	AliasContext *GoogleDevtoolsContaineranalysisV1alpha1AliasContext `json:"aliasContext,omitempty"`
	RepoID       *GoogleDevtoolsContaineranalysisV1alpha1RepoID       `json:"repoId,omitempty"`
	RevisionID   *string                                              `json:"revisionId,omitempty"`
}
