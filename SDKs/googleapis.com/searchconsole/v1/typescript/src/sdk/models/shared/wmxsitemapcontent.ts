import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WmxSitemapContentTypeEnum {
    Web = "WEB",
    Image = "IMAGE",
    Video = "VIDEO",
    News = "NEWS",
    Mobile = "MOBILE",
    AndroidApp = "ANDROID_APP",
    Pattern = "PATTERN",
    IosApp = "IOS_APP",
    DataFeedElement = "DATA_FEED_ELEMENT"
}


// WmxSitemapContent
/** 
 * Information about the various content types in the sitemap.
**/
export class WmxSitemapContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexed" })
  indexed?: string;

  @SpeakeasyMetadata({ data: "json, name=submitted" })
  submitted?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: WmxSitemapContentTypeEnum;
}
