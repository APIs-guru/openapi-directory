import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1Entitlement } from "./googlecloudchannelv1entitlement";


// GoogleCloudChannelV1TransferEntitlementsRequest
/** 
 * Request message for CloudChannelService.TransferEntitlements.
**/
export class GoogleCloudChannelV1TransferEntitlementsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=authToken" })
  authToken?: string;

  @Metadata({ data: "json, name=entitlements", elemType: shared.GoogleCloudChannelV1Entitlement })
  entitlements?: GoogleCloudChannelV1Entitlement[];

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
