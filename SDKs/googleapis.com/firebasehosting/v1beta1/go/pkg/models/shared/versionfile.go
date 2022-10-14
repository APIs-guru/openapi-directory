package shared

type VersionFileStatusEnum string

const (
	VersionFileStatusEnumStatusUnspecified VersionFileStatusEnum = "STATUS_UNSPECIFIED"
	VersionFileStatusEnumExpected          VersionFileStatusEnum = "EXPECTED"
	VersionFileStatusEnumActive            VersionFileStatusEnum = "ACTIVE"
)

type VersionFile struct {
	Hash   *string                `json:"hash,omitempty"`
	Path   *string                `json:"path,omitempty"`
	Status *VersionFileStatusEnum `json:"status,omitempty"`
}
