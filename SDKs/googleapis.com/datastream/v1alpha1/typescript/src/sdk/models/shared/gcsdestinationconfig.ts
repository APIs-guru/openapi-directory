import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JsonFileFormat } from "./jsonfileformat";


export enum GcsDestinationConfigGcsFileFormatEnum {
    GcsFileFormatUnspecified = "GCS_FILE_FORMAT_UNSPECIFIED",
    Avro = "AVRO"
}


// GcsDestinationConfig
/** 
 * Google Cloud Storage destination configuration
**/
export class GcsDestinationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avroFileFormat" })
  avroFileFormat?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=fileRotationInterval" })
  fileRotationInterval?: string;

  @SpeakeasyMetadata({ data: "json, name=fileRotationMb" })
  fileRotationMb?: number;

  @SpeakeasyMetadata({ data: "json, name=gcsFileFormat" })
  gcsFileFormat?: GcsDestinationConfigGcsFileFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=jsonFileFormat" })
  jsonFileFormat?: JsonFileFormat;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
