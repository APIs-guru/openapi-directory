import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelBannerResource
/** 
 * A channel banner returned as the response to a channel_banner.insert call.
**/
export class ChannelBannerResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
