import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ChannelPartnerRepricingConfig } from "./googlecloudchannelv1channelpartnerrepricingconfig";



// GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse
/** 
 * Response message for CloudChannelService.ListChannelPartnerRepricingConfigs.
**/
export class GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelPartnerRepricingConfigs", elemType: GoogleCloudChannelV1ChannelPartnerRepricingConfig })
  channelPartnerRepricingConfigs?: GoogleCloudChannelV1ChannelPartnerRepricingConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
