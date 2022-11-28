import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentSchema } from "./googleclouddocumentaiv1beta3documentschema";
import { GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData } from "./googleclouddocumentaiv1beta3trainprocessorversionrequestinputdata";
import { GoogleCloudDocumentaiV1beta3ProcessorVersion } from "./googleclouddocumentaiv1beta3processorversion";
/**
 * Request message for the create processor version method.
**/
export declare class GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest extends SpeakeasyBase {
    baseProcessorVersion?: string;
    documentSchema?: GoogleCloudDocumentaiV1beta3DocumentSchema;
    inputData?: GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData;
    processorVersion?: GoogleCloudDocumentaiV1beta3ProcessorVersion;
}
