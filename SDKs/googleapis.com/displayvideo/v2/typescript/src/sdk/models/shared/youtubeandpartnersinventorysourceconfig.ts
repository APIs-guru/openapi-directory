import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// YoutubeAndPartnersInventorySourceConfig
/** 
 * Settings that control what YouTube related inventories the YouTube and Partners line item will target.
**/
export class YoutubeAndPartnersInventorySourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeYoutubeSearch" })
  includeYoutubeSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeYoutubeVideoPartners" })
  includeYoutubeVideoPartners?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeYoutubeVideos" })
  includeYoutubeVideos?: boolean;
}
