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
	Config       *ServingConfig     `json:"config"`
	CreateTime   *string            `json:"createTime"`
	CreateUser   *ActingUser        `json:"createUser"`
	DeleteTime   *string            `json:"deleteTime"`
	DeleteUser   *ActingUser        `json:"deleteUser"`
	FileCount    *string            `json:"fileCount"`
	FinalizeTime *string            `json:"finalizeTime"`
	FinalizeUser *ActingUser        `json:"finalizeUser"`
	Labels       map[string]string  `json:"labels"`
	Name         *string            `json:"name"`
	Status       *VersionStatusEnum `json:"status"`
	VersionBytes *string            `json:"versionBytes"`
}
