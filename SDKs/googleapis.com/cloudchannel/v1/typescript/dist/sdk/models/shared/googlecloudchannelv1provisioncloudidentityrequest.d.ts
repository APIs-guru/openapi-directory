import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1CloudIdentityInfoInput } from "./googlecloudchannelv1cloudidentityinfo";
import { GoogleCloudChannelV1AdminUser } from "./googlecloudchannelv1adminuser";
/**
 * Request message for CloudChannelService.ProvisionCloudIdentity
**/
export declare class GoogleCloudChannelV1ProvisionCloudIdentityRequestInput extends SpeakeasyBase {
    cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfoInput;
    user?: GoogleCloudChannelV1AdminUser;
    validateOnly?: boolean;
}
