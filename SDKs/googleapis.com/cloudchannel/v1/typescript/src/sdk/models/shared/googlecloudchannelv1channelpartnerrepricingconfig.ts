import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1RepricingConfig } from "./googlecloudchannelv1repricingconfig";


// GoogleCloudChannelV1ChannelPartnerRepricingConfig
/** 
 * Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).
**/
export class GoogleCloudChannelV1ChannelPartnerRepricingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=repricingConfig" })
  repricingConfig?: GoogleCloudChannelV1RepricingConfig;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
