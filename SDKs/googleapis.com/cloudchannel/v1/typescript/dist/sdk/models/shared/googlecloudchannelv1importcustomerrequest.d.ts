import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for CloudChannelService.ImportCustomer
**/
export declare class GoogleCloudChannelV1ImportCustomerRequest extends SpeakeasyBase {
    authToken?: string;
    channelPartnerId?: string;
    cloudIdentityId?: string;
    customer?: string;
    domain?: string;
    overwriteIfExists?: boolean;
}
