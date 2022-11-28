import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentOutputConfig } from "./googleclouddocumentaiv1beta3documentoutputconfig";
import { GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig } from "./googleclouddocumentaiv1beta3batchprocessrequestbatchinputconfig";
import { GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig } from "./googleclouddocumentaiv1beta3batchdocumentsinputconfig";
import { GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig } from "./googleclouddocumentaiv1beta3batchprocessrequestbatchoutputconfig";
/**
 * Request message for batch process document method.
**/
export declare class GoogleCloudDocumentaiV1beta3BatchProcessRequest extends SpeakeasyBase {
    documentOutputConfig?: GoogleCloudDocumentaiV1beta3DocumentOutputConfig;
    inputConfigs?: GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig[];
    inputDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
    outputConfig?: GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig;
    skipHumanReview?: boolean;
}
