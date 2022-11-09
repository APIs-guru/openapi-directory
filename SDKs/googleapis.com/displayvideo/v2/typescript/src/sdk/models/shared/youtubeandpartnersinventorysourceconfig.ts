import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// YoutubeAndPartnersInventorySourceConfig
/** 
 * Settings that control what YouTube related inventories the YouTube and Partners line item will target.
**/
export class YoutubeAndPartnersInventorySourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeYoutubeSearch" })
  includeYoutubeSearch?: boolean;

  @Metadata({ data: "json, name=includeYoutubeVideoPartners" })
  includeYoutubeVideoPartners?: boolean;

  @Metadata({ data: "json, name=includeYoutubeVideos" })
  includeYoutubeVideos?: boolean;
}
