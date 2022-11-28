import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1CustomerRepricingConfig } from "./googlecloudchannelv1customerrepricingconfig";
/**
 * Response message for CloudChannelService.ListCustomerRepricingConfigs.
**/
export declare class GoogleCloudChannelV1ListCustomerRepricingConfigsResponse extends SpeakeasyBase {
    customerRepricingConfigs?: GoogleCloudChannelV1CustomerRepricingConfig[];
    nextPageToken?: string;
}
