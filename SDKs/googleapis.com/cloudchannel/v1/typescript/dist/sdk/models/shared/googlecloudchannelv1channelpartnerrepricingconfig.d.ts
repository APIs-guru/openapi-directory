import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RepricingConfig } from "./googlecloudchannelv1repricingconfig";
/**
 * Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).
**/
export declare class GoogleCloudChannelV1ChannelPartnerRepricingConfig extends SpeakeasyBase {
    name?: string;
    repricingConfig?: GoogleCloudChannelV1RepricingConfig;
    updateTime?: string;
}
/**
 * Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).
**/
export declare class GoogleCloudChannelV1ChannelPartnerRepricingConfigInput extends SpeakeasyBase {
    repricingConfig?: GoogleCloudChannelV1RepricingConfig;
}
