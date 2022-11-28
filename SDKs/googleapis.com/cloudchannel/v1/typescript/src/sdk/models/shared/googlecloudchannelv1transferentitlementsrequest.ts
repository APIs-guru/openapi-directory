import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1EntitlementInput } from "./googlecloudchannelv1entitlement";



// GoogleCloudChannelV1TransferEntitlementsRequestInput
/** 
 * Request message for CloudChannelService.TransferEntitlements.
**/
export class GoogleCloudChannelV1TransferEntitlementsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authToken" })
  authToken?: string;

  @SpeakeasyMetadata({ data: "json, name=entitlements", elemType: GoogleCloudChannelV1EntitlementInput })
  entitlements?: GoogleCloudChannelV1EntitlementInput[];

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
