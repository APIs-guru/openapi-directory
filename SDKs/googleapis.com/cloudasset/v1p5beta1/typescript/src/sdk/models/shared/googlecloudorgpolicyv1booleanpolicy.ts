import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudOrgpolicyV1BooleanPolicy
/** 
 * Used in `policy_type` to specify how `boolean_policy` will behave at this resource.
**/
export class GoogleCloudOrgpolicyV1BooleanPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=enforced" })
  enforced?: boolean;
}
