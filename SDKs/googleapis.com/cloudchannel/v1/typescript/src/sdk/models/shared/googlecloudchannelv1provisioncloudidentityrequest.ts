import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1CloudIdentityInfo } from "./googlecloudchannelv1cloudidentityinfo";
import { GoogleCloudChannelV1AdminUser } from "./googlecloudchannelv1adminuser";


// GoogleCloudChannelV1ProvisionCloudIdentityRequest
/** 
 * Request message for CloudChannelService.ProvisionCloudIdentity
**/
export class GoogleCloudChannelV1ProvisionCloudIdentityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudIdentityInfo" })
  cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo;

  @Metadata({ data: "json, name=user" })
  user?: GoogleCloudChannelV1AdminUser;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
