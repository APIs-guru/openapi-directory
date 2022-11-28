import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig } from "./googleclouddocumentaiv1beta3batchdocumentsinputconfig";



// GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest
/** 
 * Evaluates the given ProcessorVersion against the supplied documents.
**/
export class GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluationDocuments" })
  evaluationDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
}
