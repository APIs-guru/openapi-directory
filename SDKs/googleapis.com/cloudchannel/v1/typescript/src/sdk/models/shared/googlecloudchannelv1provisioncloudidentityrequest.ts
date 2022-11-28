import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1CloudIdentityInfoInput } from "./googlecloudchannelv1cloudidentityinfo";
import { GoogleCloudChannelV1AdminUser } from "./googlecloudchannelv1adminuser";



// GoogleCloudChannelV1ProvisionCloudIdentityRequestInput
/** 
 * Request message for CloudChannelService.ProvisionCloudIdentity
**/
export class GoogleCloudChannelV1ProvisionCloudIdentityRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudIdentityInfo" })
  cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfoInput;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: GoogleCloudChannelV1AdminUser;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
