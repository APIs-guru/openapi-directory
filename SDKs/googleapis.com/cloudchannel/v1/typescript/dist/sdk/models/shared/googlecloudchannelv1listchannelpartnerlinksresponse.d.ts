import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ChannelPartnerLink } from "./googlecloudchannelv1channelpartnerlink";
/**
 * Response message for CloudChannelService.ListChannelPartnerLinks.
**/
export declare class GoogleCloudChannelV1ListChannelPartnerLinksResponse extends SpeakeasyBase {
    channelPartnerLinks?: GoogleCloudChannelV1ChannelPartnerLink[];
    nextPageToken?: string;
}
