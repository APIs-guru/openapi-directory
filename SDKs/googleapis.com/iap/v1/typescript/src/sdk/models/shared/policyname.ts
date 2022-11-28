import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PolicyName
/** 
 * An internal name for an IAM policy, based on the resource to which the policy applies. Not to be confused with a resource's external full resource name. For more information on this distinction, see go/iam-full-resource-names.
**/
export class PolicyName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
