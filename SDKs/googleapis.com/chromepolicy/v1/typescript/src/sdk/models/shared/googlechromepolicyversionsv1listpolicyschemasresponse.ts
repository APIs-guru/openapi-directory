import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromePolicyVersionsV1PolicySchema } from "./googlechromepolicyversionsv1policyschema";


// GoogleChromePolicyVersionsV1ListPolicySchemasResponse
/** 
 * Response message for listing policy schemas that match a filter.
**/
export class GoogleChromePolicyVersionsV1ListPolicySchemasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=policySchemas", elemType: shared.GoogleChromePolicyVersionsV1PolicySchema })
  policySchemas?: GoogleChromePolicyVersionsV1PolicySchema[];
}
