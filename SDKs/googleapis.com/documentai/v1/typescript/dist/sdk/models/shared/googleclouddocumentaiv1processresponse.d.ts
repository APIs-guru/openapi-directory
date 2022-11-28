import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1Document } from "./googleclouddocumentaiv1document";
import { GoogleCloudDocumentaiV1HumanReviewStatus } from "./googleclouddocumentaiv1humanreviewstatus";
/**
 * Response message for the process document method.
**/
export declare class GoogleCloudDocumentaiV1ProcessResponse extends SpeakeasyBase {
    document?: GoogleCloudDocumentaiV1Document;
    humanReviewStatus?: GoogleCloudDocumentaiV1HumanReviewStatus;
}
