import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig } from "./googleclouddocumentaiv1documentoutputconfiggcsoutputconfig";


// GoogleCloudDocumentaiV1DocumentOutputConfig
/** 
 * Config that controls the output of documents. All documents will be written as a JSON file.
**/
export class GoogleCloudDocumentaiV1DocumentOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsOutputConfig" })
  gcsOutputConfig?: GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig;
}
