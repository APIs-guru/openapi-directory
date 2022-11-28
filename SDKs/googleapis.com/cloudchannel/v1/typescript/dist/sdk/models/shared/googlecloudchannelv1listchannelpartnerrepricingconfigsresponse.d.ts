import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ChannelPartnerRepricingConfig } from "./googlecloudchannelv1channelpartnerrepricingconfig";
/**
 * Response message for CloudChannelService.ListChannelPartnerRepricingConfigs.
**/
export declare class GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse extends SpeakeasyBase {
    channelPartnerRepricingConfigs?: GoogleCloudChannelV1ChannelPartnerRepricingConfig[];
    nextPageToken?: string;
}
