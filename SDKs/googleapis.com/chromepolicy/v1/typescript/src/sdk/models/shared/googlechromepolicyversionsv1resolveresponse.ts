import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1ResolvedPolicy } from "./googlechromepolicyversionsv1resolvedpolicy";



// GoogleChromePolicyVersionsV1ResolveResponse
/** 
 * Response message for getting the resolved policy value for a specific target.
**/
export class GoogleChromePolicyVersionsV1ResolveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resolvedPolicies", elemType: GoogleChromePolicyVersionsV1ResolvedPolicy })
  resolvedPolicies?: GoogleChromePolicyVersionsV1ResolvedPolicy[];
}
