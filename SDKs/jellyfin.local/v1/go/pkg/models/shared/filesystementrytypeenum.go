package shared

type FileSystemEntryTypeEnum string

const (
	FileSystemEntryTypeEnumFile            FileSystemEntryTypeEnum = "File"
	FileSystemEntryTypeEnumDirectory       FileSystemEntryTypeEnum = "Directory"
	FileSystemEntryTypeEnumNetworkComputer FileSystemEntryTypeEnum = "NetworkComputer"
	FileSystemEntryTypeEnumNetworkShare    FileSystemEntryTypeEnum = "NetworkShare"
)
