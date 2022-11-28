import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1EntitlementInput } from "./googlecloudchannelv1entitlement";



// GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput
/** 
 * Request message for CloudChannelService.TransferEntitlementsToGoogle.
**/
export class GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entitlements", elemType: GoogleCloudChannelV1EntitlementInput })
  entitlements?: GoogleCloudChannelV1EntitlementInput[];

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
