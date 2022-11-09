import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SearchCseSiterestrictListImgColorTypeEnum {
    ImgColorTypeUndefined = "imgColorTypeUndefined",
    Mono = "mono",
    Gray = "gray",
    Color = "color",
    Trans = "trans"
}
export declare enum SearchCseSiterestrictListImgDominantColorEnum {
    ImgDominantColorUndefined = "imgDominantColorUndefined",
    Black = "black",
    Blue = "blue",
    Brown = "brown",
    Gray = "gray",
    Green = "green",
    Orange = "orange",
    Pink = "pink",
    Purple = "purple",
    Red = "red",
    Teal = "teal",
    White = "white",
    Yellow = "yellow"
}
export declare enum SearchCseSiterestrictListImgSizeEnum {
    ImgSizeUndefined = "imgSizeUndefined",
    Huge = "HUGE",
    Icon = "ICON",
    Large = "LARGE",
    Medium = "MEDIUM",
    Small = "SMALL",
    Xlarge = "XLARGE",
    Xxlarge = "XXLARGE"
}
export declare enum SearchCseSiterestrictListImgTypeEnum {
    ImgTypeUndefined = "imgTypeUndefined",
    Clipart = "clipart",
    Face = "face",
    Lineart = "lineart",
    Stock = "stock",
    Photo = "photo",
    Animated = "animated"
}
export declare enum SearchCseSiterestrictListSafeEnum {
    SafeUndefined = "safeUndefined",
    Active = "active",
    High = "high",
    Medium = "medium",
    Off = "off"
}
export declare enum SearchCseSiterestrictListSearchTypeEnum {
    SearchTypeUndefined = "searchTypeUndefined",
    Image = "image"
}
export declare enum SearchCseSiterestrictListSiteSearchFilterEnum {
    SiteSearchFilterUndefined = "siteSearchFilterUndefined",
    E = "e",
    I = "i"
}
export declare class SearchCseSiterestrictListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    c2coff?: string;
    callback?: string;
    cr?: string;
    cx?: string;
    dateRestrict?: string;
    exactTerms?: string;
    excludeTerms?: string;
    fields?: string;
    fileType?: string;
    filter?: string;
    gl?: string;
    googlehost?: string;
    highRange?: string;
    hl?: string;
    hq?: string;
    imgColorType?: SearchCseSiterestrictListImgColorTypeEnum;
    imgDominantColor?: SearchCseSiterestrictListImgDominantColorEnum;
    imgSize?: SearchCseSiterestrictListImgSizeEnum;
    imgType?: SearchCseSiterestrictListImgTypeEnum;
    key?: string;
    linkSite?: string;
    lowRange?: string;
    lr?: string;
    num?: number;
    oauthToken?: string;
    orTerms?: string;
    prettyPrint?: boolean;
    q?: string;
    quotaUser?: string;
    relatedSite?: string;
    rights?: string;
    safe?: SearchCseSiterestrictListSafeEnum;
    searchType?: SearchCseSiterestrictListSearchTypeEnum;
    siteSearch?: string;
    siteSearchFilter?: SearchCseSiterestrictListSiteSearchFilterEnum;
    sort?: string;
    start?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SearchCseSiterestrictListRequest extends SpeakeasyBase {
    queryParams: SearchCseSiterestrictListQueryParams;
}
export declare class SearchCseSiterestrictListResponse extends SpeakeasyBase {
    contentType: string;
    search?: shared.Search;
    statusCode: number;
}
