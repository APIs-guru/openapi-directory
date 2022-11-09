import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JsonFileFormat } from "./jsonfileformat";

export enum GcsDestinationConfigGcsFileFormatEnum {
    GcsFileFormatUnspecified = "GCS_FILE_FORMAT_UNSPECIFIED"
,    Avro = "AVRO"
}


// GcsDestinationConfig
/** 
 * Google Cloud Storage destination configuration
**/
export class GcsDestinationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=avroFileFormat" })
  avroFileFormat?: Map<string, any>;

  @Metadata({ data: "json, name=fileRotationInterval" })
  fileRotationInterval?: string;

  @Metadata({ data: "json, name=fileRotationMb" })
  fileRotationMb?: number;

  @Metadata({ data: "json, name=gcsFileFormat" })
  gcsFileFormat?: GcsDestinationConfigGcsFileFormatEnum;

  @Metadata({ data: "json, name=jsonFileFormat" })
  jsonFileFormat?: JsonFileFormat;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
