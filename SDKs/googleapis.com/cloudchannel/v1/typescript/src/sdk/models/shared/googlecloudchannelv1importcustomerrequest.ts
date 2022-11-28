import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1ImportCustomerRequest
/** 
 * Request message for CloudChannelService.ImportCustomer
**/
export class GoogleCloudChannelV1ImportCustomerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authToken" })
  authToken?: string;

  @SpeakeasyMetadata({ data: "json, name=channelPartnerId" })
  channelPartnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudIdentityId" })
  cloudIdentityId?: string;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=overwriteIfExists" })
  overwriteIfExists?: boolean;
}
