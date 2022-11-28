import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1EntitlementInput } from "./googlecloudchannelv1entitlement";



// GoogleCloudChannelV1CreateEntitlementRequestInput
/** 
 * Request message for CloudChannelService.CreateEntitlement
**/
export class GoogleCloudChannelV1CreateEntitlementRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entitlement" })
  entitlement?: GoogleCloudChannelV1EntitlementInput;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
