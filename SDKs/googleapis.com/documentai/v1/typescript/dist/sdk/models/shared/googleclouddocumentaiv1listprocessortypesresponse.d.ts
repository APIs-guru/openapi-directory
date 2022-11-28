import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1ProcessorType } from "./googleclouddocumentaiv1processortype";
/**
 * Response message for list processor types.
**/
export declare class GoogleCloudDocumentaiV1ListProcessorTypesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    processorTypes?: GoogleCloudDocumentaiV1ProcessorType[];
}
