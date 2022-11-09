import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudChannelV1ImportCustomerRequest
/** 
 * Request message for CloudChannelService.ImportCustomer
**/
export class GoogleCloudChannelV1ImportCustomerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=authToken" })
  authToken?: string;

  @Metadata({ data: "json, name=channelPartnerId" })
  channelPartnerId?: string;

  @Metadata({ data: "json, name=cloudIdentityId" })
  cloudIdentityId?: string;

  @Metadata({ data: "json, name=customer" })
  customer?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=overwriteIfExists" })
  overwriteIfExists?: boolean;
}
