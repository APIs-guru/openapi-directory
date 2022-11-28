import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Evaluation } from "./googleclouddocumentaiv1beta3evaluation";
/**
 * The response from ListEvaluations.
**/
export declare class GoogleCloudDocumentaiV1beta3ListEvaluationsResponse extends SpeakeasyBase {
    evaluations?: GoogleCloudDocumentaiV1beta3Evaluation[];
    nextPageToken?: string;
}
