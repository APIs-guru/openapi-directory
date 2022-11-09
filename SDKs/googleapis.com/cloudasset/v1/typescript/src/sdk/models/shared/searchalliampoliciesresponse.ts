import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IamPolicySearchResult } from "./iampolicysearchresult";


// SearchAllIamPoliciesResponse
/** 
 * Search all IAM policies response.
**/
export class SearchAllIamPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=results", elemType: shared.IamPolicySearchResult })
  results?: IamPolicySearchResult[];
}
