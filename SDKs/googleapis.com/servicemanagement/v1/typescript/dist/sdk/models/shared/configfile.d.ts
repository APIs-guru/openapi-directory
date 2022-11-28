import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConfigFileFileTypeEnum {
    FileTypeUnspecified = "FILE_TYPE_UNSPECIFIED",
    ServiceConfigYaml = "SERVICE_CONFIG_YAML",
    OpenApiJson = "OPEN_API_JSON",
    OpenApiYaml = "OPEN_API_YAML",
    FileDescriptorSetProto = "FILE_DESCRIPTOR_SET_PROTO",
    ProtoFile = "PROTO_FILE"
}
/**
 * Generic specification of a source configuration file
**/
export declare class ConfigFile extends SpeakeasyBase {
    fileContents?: string;
    filePath?: string;
    fileType?: ConfigFileFileTypeEnum;
}
