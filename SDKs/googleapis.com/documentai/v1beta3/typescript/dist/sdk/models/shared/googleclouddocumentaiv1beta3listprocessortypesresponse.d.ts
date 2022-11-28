import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3ProcessorType } from "./googleclouddocumentaiv1beta3processortype";
/**
 * Response message for list processor types.
**/
export declare class GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    processorTypes?: GoogleCloudDocumentaiV1beta3ProcessorType[];
}
