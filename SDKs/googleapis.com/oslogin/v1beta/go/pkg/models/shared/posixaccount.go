package shared

type PosixAccountOperatingSystemTypeEnum string

const (
	PosixAccountOperatingSystemTypeEnumOperatingSystemTypeUnspecified PosixAccountOperatingSystemTypeEnum = "OPERATING_SYSTEM_TYPE_UNSPECIFIED"
	PosixAccountOperatingSystemTypeEnumLinux                          PosixAccountOperatingSystemTypeEnum = "LINUX"
	PosixAccountOperatingSystemTypeEnumWindows                        PosixAccountOperatingSystemTypeEnum = "WINDOWS"
)

type PosixAccount struct {
	AccountID           *string                              `json:"accountId,omitempty"`
	Gecos               *string                              `json:"gecos,omitempty"`
	Gid                 *string                              `json:"gid,omitempty"`
	HomeDirectory       *string                              `json:"homeDirectory,omitempty"`
	Name                *string                              `json:"name,omitempty"`
	OperatingSystemType *PosixAccountOperatingSystemTypeEnum `json:"operatingSystemType,omitempty"`
	Primary             *bool                                `json:"primary,omitempty"`
	Shell               *string                              `json:"shell,omitempty"`
	SystemID            *string                              `json:"systemId,omitempty"`
	UID                 *string                              `json:"uid,omitempty"`
	Username            *string                              `json:"username,omitempty"`
}
