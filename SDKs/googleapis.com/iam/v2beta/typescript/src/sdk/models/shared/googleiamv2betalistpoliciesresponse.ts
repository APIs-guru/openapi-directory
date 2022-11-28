import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIamV2betaPolicy } from "./googleiamv2betapolicy";



// GoogleIamV2betaListPoliciesResponse
/** 
 * Response message for `ListPolicies`.
**/
export class GoogleIamV2betaListPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=policies", elemType: GoogleIamV2betaPolicy })
  policies?: GoogleIamV2betaPolicy[];
}
