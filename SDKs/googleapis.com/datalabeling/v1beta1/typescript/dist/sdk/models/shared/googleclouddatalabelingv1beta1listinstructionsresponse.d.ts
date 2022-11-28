import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Instruction } from "./googleclouddatalabelingv1beta1instruction";
/**
 * Results of listing instructions under a project.
**/
export declare class GoogleCloudDatalabelingV1beta1ListInstructionsResponse extends SpeakeasyBase {
    instructions?: GoogleCloudDatalabelingV1beta1Instruction[];
    nextPageToken?: string;
}
