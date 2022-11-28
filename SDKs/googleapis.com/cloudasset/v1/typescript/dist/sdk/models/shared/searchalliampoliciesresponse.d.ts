import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicySearchResult } from "./iampolicysearchresult";
/**
 * Search all IAM policies response.
**/
export declare class SearchAllIamPoliciesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    results?: IamPolicySearchResult[];
}
