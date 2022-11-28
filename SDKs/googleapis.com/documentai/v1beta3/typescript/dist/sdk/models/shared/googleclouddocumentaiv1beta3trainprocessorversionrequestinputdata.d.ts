import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig } from "./googleclouddocumentaiv1beta3batchdocumentsinputconfig";
/**
 * The input data used to train a new `ProcessorVersion`.
**/
export declare class GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData extends SpeakeasyBase {
    testDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
    trainingDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
}
