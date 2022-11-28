import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicySchema } from "./googlechromepolicyversionsv1policyschema";
/**
 * Response message for listing policy schemas that match a filter.
**/
export declare class GoogleChromePolicyVersionsV1ListPolicySchemasResponse extends SpeakeasyBase {
    nextPageToken?: string;
    policySchemas?: GoogleChromePolicyVersionsV1PolicySchema[];
}
