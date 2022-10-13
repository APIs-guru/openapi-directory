package shared

type ConfigFileFileTypeEnum string

const (
	ConfigFileFileTypeEnumFileTypeUnspecified    ConfigFileFileTypeEnum = "FILE_TYPE_UNSPECIFIED"
	ConfigFileFileTypeEnumServiceConfigYaml      ConfigFileFileTypeEnum = "SERVICE_CONFIG_YAML"
	ConfigFileFileTypeEnumOpenApijson            ConfigFileFileTypeEnum = "OPEN_API_JSON"
	ConfigFileFileTypeEnumOpenAPIYaml            ConfigFileFileTypeEnum = "OPEN_API_YAML"
	ConfigFileFileTypeEnumFileDescriptorSetProto ConfigFileFileTypeEnum = "FILE_DESCRIPTOR_SET_PROTO"
	ConfigFileFileTypeEnumProtoFile              ConfigFileFileTypeEnum = "PROTO_FILE"
)

type ConfigFile struct {
	FileContents *string                 `json:"fileContents"`
	FilePath     *string                 `json:"filePath"`
	FileType     *ConfigFileFileTypeEnum `json:"fileType"`
}
