import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelBannerResource
/** 
 * A channel banner returned as the response to a channel_banner.insert call.
**/
export class ChannelBannerResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
