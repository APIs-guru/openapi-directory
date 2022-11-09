import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudChannelV1AssociationInfo
/** 
 * Association links that an entitlement has to other entitlements.
**/
export class GoogleCloudChannelV1AssociationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseEntitlement" })
  baseEntitlement?: string;
}
