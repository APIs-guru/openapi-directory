import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPolicyanalyzerV1beta1Activity } from "./googlecloudpolicyanalyzerv1beta1activity";
/**
 * Response to the `QueryActivity` method.
**/
export declare class GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse extends SpeakeasyBase {
    activities?: GoogleCloudPolicyanalyzerV1beta1Activity[];
    nextPageToken?: string;
}
