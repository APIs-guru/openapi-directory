import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Evaluation } from "./googleclouddatalabelingv1beta1evaluation";
/**
 * Results of searching evaluations.
**/
export declare class GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse extends SpeakeasyBase {
    evaluations?: GoogleCloudDatalabelingV1beta1Evaluation[];
    nextPageToken?: string;
}
