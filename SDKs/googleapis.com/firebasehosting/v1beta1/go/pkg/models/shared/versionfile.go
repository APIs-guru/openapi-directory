package shared

type VersionFileStatusEnum string

const (
	VersionFileStatusEnumStatusUnspecified VersionFileStatusEnum = "STATUS_UNSPECIFIED"
	VersionFileStatusEnumExpected          VersionFileStatusEnum = "EXPECTED"
	VersionFileStatusEnumActive            VersionFileStatusEnum = "ACTIVE"
)

type VersionFile struct {
	Hash   *string                `json:"hash"`
	Path   *string                `json:"path"`
	Status *VersionFileStatusEnum `json:"status"`
}
