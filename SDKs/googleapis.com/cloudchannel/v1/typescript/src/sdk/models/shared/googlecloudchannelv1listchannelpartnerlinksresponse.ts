import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ChannelPartnerLink } from "./googlecloudchannelv1channelpartnerlink";



// GoogleCloudChannelV1ListChannelPartnerLinksResponse
/** 
 * Response message for CloudChannelService.ListChannelPartnerLinks.
**/
export class GoogleCloudChannelV1ListChannelPartnerLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelPartnerLinks", elemType: GoogleCloudChannelV1ChannelPartnerLink })
  channelPartnerLinks?: GoogleCloudChannelV1ChannelPartnerLink[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
