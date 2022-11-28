import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Processor } from "./googleclouddocumentaiv1beta3processor";
/**
 * Response message for list processors.
**/
export declare class GoogleCloudDocumentaiV1beta3ListProcessorsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    processors?: GoogleCloudDocumentaiV1beta3Processor[];
}
