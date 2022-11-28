import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchCseListImgColorTypeEnum {
    ImgColorTypeUndefined = "imgColorTypeUndefined",
    Mono = "mono",
    Gray = "gray",
    Color = "color",
    Trans = "trans"
}
export declare enum SearchCseListImgDominantColorEnum {
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
export declare enum SearchCseListImgSizeEnum {
    ImgSizeUndefined = "imgSizeUndefined",
    Huge = "HUGE",
    Icon = "ICON",
    Large = "LARGE",
    Medium = "MEDIUM",
    Small = "SMALL",
    Xlarge = "XLARGE",
    Xxlarge = "XXLARGE"
}
export declare enum SearchCseListImgTypeEnum {
    ImgTypeUndefined = "imgTypeUndefined",
    Clipart = "clipart",
    Face = "face",
    Lineart = "lineart",
    Stock = "stock",
    Photo = "photo",
    Animated = "animated"
}
export declare enum SearchCseListSafeEnum {
    SafeUndefined = "safeUndefined",
    Active = "active",
    High = "high",
    Medium = "medium",
    Off = "off"
}
export declare enum SearchCseListSearchTypeEnum {
    SearchTypeUndefined = "searchTypeUndefined",
    Image = "image"
}
export declare enum SearchCseListSiteSearchFilterEnum {
    SiteSearchFilterUndefined = "siteSearchFilterUndefined",
    E = "e",
    I = "i"
}
export declare class SearchCseListQueryParams extends SpeakeasyBase {
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
    imgColorType?: SearchCseListImgColorTypeEnum;
    imgDominantColor?: SearchCseListImgDominantColorEnum;
    imgSize?: SearchCseListImgSizeEnum;
    imgType?: SearchCseListImgTypeEnum;
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
    safe?: SearchCseListSafeEnum;
    searchType?: SearchCseListSearchTypeEnum;
    siteSearch?: string;
    siteSearchFilter?: SearchCseListSiteSearchFilterEnum;
    sort?: string;
    start?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SearchCseListRequest extends SpeakeasyBase {
    queryParams: SearchCseListQueryParams;
}
export declare class SearchCseListResponse extends SpeakeasyBase {
    contentType: string;
    search?: shared.Search;
    statusCode: number;
}
