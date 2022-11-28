import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromePolicyVersionsV1PolicyValue
/** 
 * A particular value for a policy managed by the service.
**/
export class GoogleChromePolicyVersionsV1PolicyValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policySchema" })
  policySchema?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
