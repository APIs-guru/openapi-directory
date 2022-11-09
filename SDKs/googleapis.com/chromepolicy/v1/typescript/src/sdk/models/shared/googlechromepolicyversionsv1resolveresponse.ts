import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromePolicyVersionsV1ResolvedPolicy } from "./googlechromepolicyversionsv1resolvedpolicy";


// GoogleChromePolicyVersionsV1ResolveResponse
/** 
 * Response message for getting the resolved policy value for a specific target.
**/
export class GoogleChromePolicyVersionsV1ResolveResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=resolvedPolicies", elemType: shared.GoogleChromePolicyVersionsV1ResolvedPolicy })
  resolvedPolicies?: GoogleChromePolicyVersionsV1ResolvedPolicy[];
}
