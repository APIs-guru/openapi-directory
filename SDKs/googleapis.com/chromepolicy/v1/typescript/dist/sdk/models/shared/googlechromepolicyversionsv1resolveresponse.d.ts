import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1ResolvedPolicy } from "./googlechromepolicyversionsv1resolvedpolicy";
/**
 * Response message for getting the resolved policy value for a specific target.
**/
export declare class GoogleChromePolicyVersionsV1ResolveResponse extends SpeakeasyBase {
    nextPageToken?: string;
    resolvedPolicies?: GoogleChromePolicyVersionsV1ResolvedPolicy[];
}
