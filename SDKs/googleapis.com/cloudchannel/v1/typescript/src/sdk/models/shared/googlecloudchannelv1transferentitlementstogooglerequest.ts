import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1Entitlement } from "./googlecloudchannelv1entitlement";


// GoogleCloudChannelV1TransferEntitlementsToGoogleRequest
/** 
 * Request message for CloudChannelService.TransferEntitlementsToGoogle.
**/
export class GoogleCloudChannelV1TransferEntitlementsToGoogleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entitlements", elemType: shared.GoogleCloudChannelV1Entitlement })
  entitlements?: GoogleCloudChannelV1Entitlement[];

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
