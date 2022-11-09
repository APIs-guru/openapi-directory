import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleIamV2betaPolicy } from "./googleiamv2betapolicy";


// GoogleIamV2betaListPoliciesResponse
/** 
 * Response message for `ListPolicies`.
**/
export class GoogleIamV2betaListPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=policies", elemType: shared.GoogleIamV2betaPolicy })
  policies?: GoogleIamV2betaPolicy[];
}
