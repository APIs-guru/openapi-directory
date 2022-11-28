import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicySchema } from "./googlechromepolicyversionsv1policyschema";



// GoogleChromePolicyVersionsV1ListPolicySchemasResponse
/** 
 * Response message for listing policy schemas that match a filter.
**/
export class GoogleChromePolicyVersionsV1ListPolicySchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=policySchemas", elemType: GoogleChromePolicyVersionsV1PolicySchema })
  policySchemas?: GoogleChromePolicyVersionsV1PolicySchema[];
}
