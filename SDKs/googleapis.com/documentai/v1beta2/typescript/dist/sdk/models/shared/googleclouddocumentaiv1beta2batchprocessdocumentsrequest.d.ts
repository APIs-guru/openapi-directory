import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2ProcessDocumentRequest } from "./googleclouddocumentaiv1beta2processdocumentrequest";
/**
 * Request to batch process documents as an asynchronous operation. The output is written to Cloud Storage as JSON in the [Document] format.
**/
export declare class GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest extends SpeakeasyBase {
    requests?: GoogleCloudDocumentaiV1beta2ProcessDocumentRequest[];
}
