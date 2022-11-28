import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudOrgpolicyV1BooleanPolicy
/** 
 * Used in `policy_type` to specify how `boolean_policy` will behave at this resource.
**/
export class GoogleCloudOrgpolicyV1BooleanPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforced" })
  enforced?: boolean;
}
