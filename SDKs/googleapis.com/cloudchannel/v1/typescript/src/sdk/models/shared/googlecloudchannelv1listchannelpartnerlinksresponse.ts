import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1ChannelPartnerLink } from "./googlecloudchannelv1channelpartnerlink";


// GoogleCloudChannelV1ListChannelPartnerLinksResponse
/** 
 * Response message for CloudChannelService.ListChannelPartnerLinks.
**/
export class GoogleCloudChannelV1ListChannelPartnerLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelPartnerLinks", elemType: shared.GoogleCloudChannelV1ChannelPartnerLink })
  channelPartnerLinks?: GoogleCloudChannelV1ChannelPartnerLink[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
