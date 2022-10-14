package shared

type DriveOptionsClientSideEncryptedOptionEnum string

const (
	DriveOptionsClientSideEncryptedOptionEnumClientSideEncryptedOptionUnspecified DriveOptionsClientSideEncryptedOptionEnum = "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED"
	DriveOptionsClientSideEncryptedOptionEnumClientSideEncryptedOptionAny         DriveOptionsClientSideEncryptedOptionEnum = "CLIENT_SIDE_ENCRYPTED_OPTION_ANY"
	DriveOptionsClientSideEncryptedOptionEnumClientSideEncryptedOptionEncrypted   DriveOptionsClientSideEncryptedOptionEnum = "CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED"
	DriveOptionsClientSideEncryptedOptionEnumClientSideEncryptedOptionUnencrypted DriveOptionsClientSideEncryptedOptionEnum = "CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED"
)

type DriveOptions struct {
	ClientSideEncryptedOption *DriveOptionsClientSideEncryptedOptionEnum `json:"clientSideEncryptedOption,omitempty"`
	IncludeSharedDrives       *bool                                      `json:"includeSharedDrives,omitempty"`
	IncludeTeamDrives         *bool                                      `json:"includeTeamDrives,omitempty"`
	VersionDate               *string                                    `json:"versionDate,omitempty"`
}
