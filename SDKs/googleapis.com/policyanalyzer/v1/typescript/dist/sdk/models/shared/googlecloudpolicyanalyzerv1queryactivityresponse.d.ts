import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicyanalyzerV1Activity } from "./googlecloudpolicyanalyzerv1activity";
/**
 * Response to the `QueryActivity` method.
**/
export declare class GoogleCloudPolicyanalyzerV1QueryActivityResponse extends SpeakeasyBase {
    activities?: GoogleCloudPolicyanalyzerV1Activity[];
    nextPageToken?: string;
}
