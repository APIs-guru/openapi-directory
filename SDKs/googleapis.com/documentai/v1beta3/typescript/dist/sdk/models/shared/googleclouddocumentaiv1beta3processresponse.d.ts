import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Document } from "./googleclouddocumentaiv1beta3document";
import { GoogleCloudDocumentaiV1beta3HumanReviewStatus } from "./googleclouddocumentaiv1beta3humanreviewstatus";
/**
 * Response message for the process document method.
**/
export declare class GoogleCloudDocumentaiV1beta3ProcessResponse extends SpeakeasyBase {
    document?: GoogleCloudDocumentaiV1beta3Document;
    humanReviewOperation?: string;
    humanReviewStatus?: GoogleCloudDocumentaiV1beta3HumanReviewStatus;
}
