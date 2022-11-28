import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1SuspendEntitlementRequest
/** 
 * Request message for CloudChannelService.SuspendEntitlement.
**/
export class GoogleCloudChannelV1SuspendEntitlementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
