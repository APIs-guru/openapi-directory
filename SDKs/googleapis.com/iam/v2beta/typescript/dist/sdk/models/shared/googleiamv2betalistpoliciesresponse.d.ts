import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleIamV2betaPolicy } from "./googleiamv2betapolicy";
/**
 * Response message for `ListPolicies`.
**/
export declare class GoogleIamV2betaListPoliciesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    policies?: GoogleIamV2betaPolicy[];
}
