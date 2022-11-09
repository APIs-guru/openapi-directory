import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum WmxSitemapContentTypeEnum {
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
/**
 * Information about the various content types in the sitemap.
**/
export declare class WmxSitemapContent extends SpeakeasyBase {
    indexed?: string;
    submitted?: string;
    type?: WmxSitemapContentTypeEnum;
}
