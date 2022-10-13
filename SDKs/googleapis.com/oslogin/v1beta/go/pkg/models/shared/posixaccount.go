package shared

type PosixAccountOperatingSystemTypeEnum string

const (
	PosixAccountOperatingSystemTypeEnumOperatingSystemTypeUnspecified PosixAccountOperatingSystemTypeEnum = "OPERATING_SYSTEM_TYPE_UNSPECIFIED"
	PosixAccountOperatingSystemTypeEnumLinux                          PosixAccountOperatingSystemTypeEnum = "LINUX"
	PosixAccountOperatingSystemTypeEnumWindows                        PosixAccountOperatingSystemTypeEnum = "WINDOWS"
)

type PosixAccount struct {
	AccountID           *string                              `json:"accountId"`
	Gecos               *string                              `json:"gecos"`
	Gid                 *string                              `json:"gid"`
	HomeDirectory       *string                              `json:"homeDirectory"`
	Name                *string                              `json:"name"`
	OperatingSystemType *PosixAccountOperatingSystemTypeEnum `json:"operatingSystemType"`
	Primary             *bool                                `json:"primary"`
	Shell               *string                              `json:"shell"`
	SystemID            *string                              `json:"systemId"`
	UID                 *string                              `json:"uid"`
	Username            *string                              `json:"username"`
}
