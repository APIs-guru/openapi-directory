import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
/**
 * Request message for getting the resolved policy value for a specific target.
**/
export declare class GoogleChromePolicyVersionsV1ResolveRequest extends SpeakeasyBase {
    pageSize?: number;
    pageToken?: string;
    policySchemaFilter?: string;
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
