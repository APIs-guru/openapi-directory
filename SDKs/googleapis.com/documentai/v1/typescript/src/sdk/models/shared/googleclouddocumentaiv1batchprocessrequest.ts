import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentOutputConfig } from "./googleclouddocumentaiv1documentoutputconfig";
import { GoogleCloudDocumentaiV1BatchDocumentsInputConfig } from "./googleclouddocumentaiv1batchdocumentsinputconfig";



// GoogleCloudDocumentaiV1BatchProcessRequest
/** 
 * Request message for batch process document method.
**/
export class GoogleCloudDocumentaiV1BatchProcessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentOutputConfig" })
  documentOutputConfig?: GoogleCloudDocumentaiV1DocumentOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=inputDocuments" })
  inputDocuments?: GoogleCloudDocumentaiV1BatchDocumentsInputConfig;

  @SpeakeasyMetadata({ data: "json, name=skipHumanReview" })
  skipHumanReview?: boolean;
}
