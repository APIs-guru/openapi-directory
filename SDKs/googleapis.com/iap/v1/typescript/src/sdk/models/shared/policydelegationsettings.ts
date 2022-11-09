import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyName } from "./policyname";
import { Resource } from "./resource";


// PolicyDelegationSettings
/** 
 * PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto.
**/
export class PolicyDelegationSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=iamPermission" })
  iamPermission?: string;

  @Metadata({ data: "json, name=iamServiceName" })
  iamServiceName?: string;

  @Metadata({ data: "json, name=policyName" })
  policyName?: PolicyName;

  @Metadata({ data: "json, name=resource" })
  resource?: Resource;
}
