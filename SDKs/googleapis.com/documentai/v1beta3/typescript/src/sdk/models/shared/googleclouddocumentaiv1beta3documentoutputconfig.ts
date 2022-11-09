import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig } from "./googleclouddocumentaiv1beta3documentoutputconfiggcsoutputconfig";


// GoogleCloudDocumentaiV1beta3DocumentOutputConfig
/** 
 * Config that controls the output of documents. All documents will be written as a JSON file.
**/
export class GoogleCloudDocumentaiV1beta3DocumentOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsOutputConfig" })
  gcsOutputConfig?: GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig;
}
