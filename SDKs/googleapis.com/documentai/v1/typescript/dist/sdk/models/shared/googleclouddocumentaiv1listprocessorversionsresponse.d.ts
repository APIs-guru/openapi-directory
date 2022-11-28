import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1ProcessorVersion } from "./googleclouddocumentaiv1processorversion";
/**
 * Response message for list processors.
**/
export declare class GoogleCloudDocumentaiV1ListProcessorVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    processorVersions?: GoogleCloudDocumentaiV1ProcessorVersion[];
}
