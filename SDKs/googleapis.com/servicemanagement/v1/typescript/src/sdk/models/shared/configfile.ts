import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConfigFileFileTypeEnum {
    FileTypeUnspecified = "FILE_TYPE_UNSPECIFIED",
    ServiceConfigYaml = "SERVICE_CONFIG_YAML",
    OpenApiJson = "OPEN_API_JSON",
    OpenApiYaml = "OPEN_API_YAML",
    FileDescriptorSetProto = "FILE_DESCRIPTOR_SET_PROTO",
    ProtoFile = "PROTO_FILE"
}


// ConfigFile
/** 
 * Generic specification of a source configuration file
**/
export class ConfigFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileContents" })
  fileContents?: string;

  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath?: string;

  @SpeakeasyMetadata({ data: "json, name=fileType" })
  fileType?: ConfigFileFileTypeEnum;
}
