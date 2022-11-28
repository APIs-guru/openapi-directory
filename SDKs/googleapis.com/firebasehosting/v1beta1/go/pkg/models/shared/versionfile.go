package shared

type VersionFileStatusEnum string

const (
	VersionFileStatusEnumStatusUnspecified VersionFileStatusEnum = "STATUS_UNSPECIFIED"
	VersionFileStatusEnumExpected          VersionFileStatusEnum = "EXPECTED"
	VersionFileStatusEnumActive            VersionFileStatusEnum = "ACTIVE"
)

// VersionFile
// A static content file that is part of a version.
type VersionFile struct {
	Hash   *string                `json:"hash,omitempty"`
	Path   *string                `json:"path,omitempty"`
	Status *VersionFileStatusEnum `json:"status,omitempty"`
}
