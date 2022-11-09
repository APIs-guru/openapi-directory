import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JsonFileFormat } from "./jsonfileformat";


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

  @Metadata({ data: "json, name=jsonFileFormat" })
  jsonFileFormat?: JsonFileFormat;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
