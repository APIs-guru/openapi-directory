import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1ChannelPartnerRepricingConfig } from "./googlecloudchannelv1channelpartnerrepricingconfig";


// GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse
/** 
 * Response message for CloudChannelService.ListChannelPartnerRepricingConfigs.
**/
export class GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelPartnerRepricingConfigs", elemType: shared.GoogleCloudChannelV1ChannelPartnerRepricingConfig })
  channelPartnerRepricingConfigs?: GoogleCloudChannelV1ChannelPartnerRepricingConfig[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
