import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1Processor } from "./googleclouddocumentaiv1processor";
/**
 * Response message for list processors.
**/
export declare class GoogleCloudDocumentaiV1ListProcessorsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    processors?: GoogleCloudDocumentaiV1Processor[];
}
