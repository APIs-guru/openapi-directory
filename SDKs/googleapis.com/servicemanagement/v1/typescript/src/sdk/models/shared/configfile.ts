import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConfigFileFileTypeEnum {
    FileTypeUnspecified = "FILE_TYPE_UNSPECIFIED"
,    ServiceConfigYaml = "SERVICE_CONFIG_YAML"
,    OpenApiJson = "OPEN_API_JSON"
,    OpenApiYaml = "OPEN_API_YAML"
,    FileDescriptorSetProto = "FILE_DESCRIPTOR_SET_PROTO"
,    ProtoFile = "PROTO_FILE"
}


// ConfigFile
/** 
 * Generic specification of a source configuration file
**/
export class ConfigFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileContents" })
  fileContents?: string;

  @Metadata({ data: "json, name=filePath" })
  filePath?: string;

  @Metadata({ data: "json, name=fileType" })
  fileType?: ConfigFileFileTypeEnum;
}
