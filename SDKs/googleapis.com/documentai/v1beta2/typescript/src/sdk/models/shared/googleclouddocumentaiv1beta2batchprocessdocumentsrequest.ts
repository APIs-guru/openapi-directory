import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2ProcessDocumentRequest } from "./googleclouddocumentaiv1beta2processdocumentrequest";



// GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest
/** 
 * Request to batch process documents as an asynchronous operation. The output is written to Cloud Storage as JSON in the [Document] format.
**/
export class GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleCloudDocumentaiV1beta2ProcessDocumentRequest })
  requests?: GoogleCloudDocumentaiV1beta2ProcessDocumentRequest[];
}
