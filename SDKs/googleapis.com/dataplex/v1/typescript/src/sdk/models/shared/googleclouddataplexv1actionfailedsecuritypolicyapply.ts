import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1ActionFailedSecurityPolicyApply
/** 
 * Failed to apply security policy to the managed resource(s) under a lake, zone or an asset. For a lake or zone resource, one or more underlying assets has a failure applying security policy to the associated managed resource.
**/
export class GoogleCloudDataplexV1ActionFailedSecurityPolicyApply extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset" })
  asset?: string;
}
