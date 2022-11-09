import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2ProcessDocumentRequest } from "./googleclouddocumentaiv1beta2processdocumentrequest";


// GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest
/** 
 * Request to batch process documents as an asynchronous operation. The output is written to Cloud Storage as JSON in the [Document] format.
**/
export class GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest })
  requests?: GoogleCloudDocumentaiV1beta2ProcessDocumentRequest[];
}
