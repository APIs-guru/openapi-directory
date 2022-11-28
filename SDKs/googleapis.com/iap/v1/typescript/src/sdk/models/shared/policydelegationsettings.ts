import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyName } from "./policyname";
import { Resource } from "./resource";



// PolicyDelegationSettings
/** 
 * PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto.
**/
export class PolicyDelegationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iamPermission" })
  iamPermission?: string;

  @SpeakeasyMetadata({ data: "json, name=iamServiceName" })
  iamServiceName?: string;

  @SpeakeasyMetadata({ data: "json, name=policyName" })
  policyName?: PolicyName;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: Resource;
}
