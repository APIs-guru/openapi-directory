import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicySearchResult } from "./iampolicysearchresult";



// SearchAllIamPoliciesResponse
/** 
 * Search all IAM policies response.
**/
export class SearchAllIamPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: IamPolicySearchResult })
  results?: IamPolicySearchResult[];
}
