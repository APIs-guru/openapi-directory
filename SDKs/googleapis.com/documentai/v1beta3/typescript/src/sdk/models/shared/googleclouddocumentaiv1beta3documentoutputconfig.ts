import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig } from "./googleclouddocumentaiv1beta3documentoutputconfiggcsoutputconfig";



// GoogleCloudDocumentaiV1beta3DocumentOutputConfig
/** 
 * Config that controls the output of documents. All documents will be written as a JSON file.
**/
export class GoogleCloudDocumentaiV1beta3DocumentOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsOutputConfig" })
  gcsOutputConfig?: GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig;
}
