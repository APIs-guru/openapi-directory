import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromePolicyVersionsV1PolicyValue
/** 
 * A particular value for a policy managed by the service.
**/
export class GoogleChromePolicyVersionsV1PolicyValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=policySchema" })
  policySchema?: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
