import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RepricingConfig } from "./googlecloudchannelv1repricingconfig";
/**
 * Configuration for how a reseller will reprice a Customer.
**/
export declare class GoogleCloudChannelV1CustomerRepricingConfigInput extends SpeakeasyBase {
    repricingConfig?: GoogleCloudChannelV1RepricingConfig;
}
/**
 * Configuration for how a reseller will reprice a Customer.
**/
export declare class GoogleCloudChannelV1CustomerRepricingConfig extends SpeakeasyBase {
    name?: string;
    repricingConfig?: GoogleCloudChannelV1RepricingConfig;
    updateTime?: string;
}
