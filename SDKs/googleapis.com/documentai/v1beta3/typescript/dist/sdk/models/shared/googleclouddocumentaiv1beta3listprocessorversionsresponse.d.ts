import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3ProcessorVersion } from "./googleclouddocumentaiv1beta3processorversion";
/**
 * Response message for list processors.
**/
export declare class GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    processorVersions?: GoogleCloudDocumentaiV1beta3ProcessorVersion[];
}
