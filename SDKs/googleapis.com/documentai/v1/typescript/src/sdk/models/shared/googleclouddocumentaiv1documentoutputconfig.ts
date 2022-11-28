import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig } from "./googleclouddocumentaiv1documentoutputconfiggcsoutputconfig";



// GoogleCloudDocumentaiV1DocumentOutputConfig
/** 
 * Config that controls the output of documents. All documents will be written as a JSON file.
**/
export class GoogleCloudDocumentaiV1DocumentOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsOutputConfig" })
  gcsOutputConfig?: GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig;
}
