import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Entitlement } from "./googlecloudchannelv1entitlement";



// GoogleCloudChannelV1ListEntitlementsResponse
/** 
 * Response message for CloudChannelService.ListEntitlements.
**/
export class GoogleCloudChannelV1ListEntitlementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entitlements", elemType: GoogleCloudChannelV1Entitlement })
  entitlements?: GoogleCloudChannelV1Entitlement[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
