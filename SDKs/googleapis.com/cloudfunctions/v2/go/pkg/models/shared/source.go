package shared

// Source
// The location of the function source code.
type Source struct {
	RepoSource    *RepoSource    `json:"repoSource,omitempty"`
	StorageSource *StorageSource `json:"storageSource,omitempty"`
}
