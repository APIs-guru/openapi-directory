import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1Entitlement } from "./googlecloudchannelv1entitlement";


// GoogleCloudChannelV1ListEntitlementsResponse
/** 
 * Response message for CloudChannelService.ListEntitlements.
**/
export class GoogleCloudChannelV1ListEntitlementsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entitlements", elemType: shared.GoogleCloudChannelV1Entitlement })
  entitlements?: GoogleCloudChannelV1Entitlement[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
