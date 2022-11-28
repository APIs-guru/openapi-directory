import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentOutputConfig } from "./googleclouddocumentaiv1documentoutputconfig";
import { GoogleCloudDocumentaiV1BatchDocumentsInputConfig } from "./googleclouddocumentaiv1batchdocumentsinputconfig";
/**
 * Request message for batch process document method.
**/
export declare class GoogleCloudDocumentaiV1BatchProcessRequest extends SpeakeasyBase {
    documentOutputConfig?: GoogleCloudDocumentaiV1DocumentOutputConfig;
    inputDocuments?: GoogleCloudDocumentaiV1BatchDocumentsInputConfig;
    skipHumanReview?: boolean;
}
