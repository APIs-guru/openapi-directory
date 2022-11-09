import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1Entitlement } from "./googlecloudchannelv1entitlement";


// GoogleCloudChannelV1CreateEntitlementRequest
/** 
 * Request message for CloudChannelService.CreateEntitlement
**/
export class GoogleCloudChannelV1CreateEntitlementRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entitlement" })
  entitlement?: GoogleCloudChannelV1Entitlement;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
