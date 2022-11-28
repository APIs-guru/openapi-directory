import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1AssociationInfo
/** 
 * Association links that an entitlement has to other entitlements.
**/
export class GoogleCloudChannelV1AssociationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseEntitlement" })
  baseEntitlement?: string;
}
