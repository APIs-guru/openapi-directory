package shared

type VersionStatusEnum string

const (
	VersionStatusEnumVersionStatusUnspecified VersionStatusEnum = "VERSION_STATUS_UNSPECIFIED"
	VersionStatusEnumCreated                  VersionStatusEnum = "CREATED"
	VersionStatusEnumFinalized                VersionStatusEnum = "FINALIZED"
	VersionStatusEnumDeleted                  VersionStatusEnum = "DELETED"
	VersionStatusEnumAbandoned                VersionStatusEnum = "ABANDONED"
	VersionStatusEnumExpired                  VersionStatusEnum = "EXPIRED"
	VersionStatusEnumCloning                  VersionStatusEnum = "CLONING"
)

type Version struct {
	Config       *ServingConfig     `json:"config,omitempty"`
	CreateTime   *string            `json:"createTime,omitempty"`
	CreateUser   *ActingUser        `json:"createUser,omitempty"`
	DeleteTime   *string            `json:"deleteTime,omitempty"`
	DeleteUser   *ActingUser        `json:"deleteUser,omitempty"`
	FileCount    *string            `json:"fileCount,omitempty"`
	FinalizeTime *string            `json:"finalizeTime,omitempty"`
	FinalizeUser *ActingUser        `json:"finalizeUser,omitempty"`
	Labels       map[string]string  `json:"labels,omitempty"`
	Name         *string            `json:"name,omitempty"`
	Status       *VersionStatusEnum `json:"status,omitempty"`
	VersionBytes *string            `json:"versionBytes,omitempty"`
}
