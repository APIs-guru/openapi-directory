import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RepricingConfig } from "./googlecloudchannelv1repricingconfig";



// GoogleCloudChannelV1ChannelPartnerRepricingConfig
/** 
 * Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).
**/
export class GoogleCloudChannelV1ChannelPartnerRepricingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=repricingConfig" })
  repricingConfig?: GoogleCloudChannelV1RepricingConfig;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudChannelV1ChannelPartnerRepricingConfigInput
/** 
 * Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).
**/
export class GoogleCloudChannelV1ChannelPartnerRepricingConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repricingConfig" })
  repricingConfig?: GoogleCloudChannelV1RepricingConfig;
}
