package shared

// Version
// A resource representing a script project version. A version is a "snapshot" of a script project and is similar to a read-only branched release. When creating deployments, the version to use must be specified.
type Version struct {
	CreateTime    *string `json:"createTime,omitempty"`
	Description   *string `json:"description,omitempty"`
	ScriptID      *string `json:"scriptId,omitempty"`
	VersionNumber *int32  `json:"versionNumber,omitempty"`
}
