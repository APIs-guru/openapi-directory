import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1DocumentOutputConfig } from "./googleclouddocumentaiv1documentoutputconfig";
import { GoogleCloudDocumentaiV1BatchDocumentsInputConfig } from "./googleclouddocumentaiv1batchdocumentsinputconfig";


// GoogleCloudDocumentaiV1BatchProcessRequest
/** 
 * Request message for batch process document method.
**/
export class GoogleCloudDocumentaiV1BatchProcessRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentOutputConfig" })
  documentOutputConfig?: GoogleCloudDocumentaiV1DocumentOutputConfig;

  @Metadata({ data: "json, name=inputDocuments" })
  inputDocuments?: GoogleCloudDocumentaiV1BatchDocumentsInputConfig;

  @Metadata({ data: "json, name=skipHumanReview" })
  skipHumanReview?: boolean;
}
