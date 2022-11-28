import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchCseSiterestrictListImgColorTypeEnum {
    ImgColorTypeUndefined = "imgColorTypeUndefined",
    Mono = "mono",
    Gray = "gray",
    Color = "color",
    Trans = "trans"
}

export enum SearchCseSiterestrictListImgDominantColorEnum {
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

export enum SearchCseSiterestrictListImgSizeEnum {
    ImgSizeUndefined = "imgSizeUndefined",
    Huge = "HUGE",
    Icon = "ICON",
    Large = "LARGE",
    Medium = "MEDIUM",
    Small = "SMALL",
    Xlarge = "XLARGE",
    Xxlarge = "XXLARGE"
}

export enum SearchCseSiterestrictListImgTypeEnum {
    ImgTypeUndefined = "imgTypeUndefined",
    Clipart = "clipart",
    Face = "face",
    Lineart = "lineart",
    Stock = "stock",
    Photo = "photo",
    Animated = "animated"
}

export enum SearchCseSiterestrictListSafeEnum {
    SafeUndefined = "safeUndefined",
    Active = "active",
    High = "high",
    Medium = "medium",
    Off = "off"
}

export enum SearchCseSiterestrictListSearchTypeEnum {
    SearchTypeUndefined = "searchTypeUndefined",
    Image = "image"
}

export enum SearchCseSiterestrictListSiteSearchFilterEnum {
    SiteSearchFilterUndefined = "siteSearchFilterUndefined",
    E = "e",
    I = "i"
}


export class SearchCseSiterestrictListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=c2coff" })
  c2coff?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cr" })
  cr?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cx" })
  cx?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRestrict" })
  dateRestrict?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exactTerms" })
  exactTerms?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeTerms" })
  excludeTerms?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fileType" })
  fileType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gl" })
  gl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googlehost" })
  googlehost?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=highRange" })
  highRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hl" })
  hl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hq" })
  hq?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imgColorType" })
  imgColorType?: SearchCseSiterestrictListImgColorTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imgDominantColor" })
  imgDominantColor?: SearchCseSiterestrictListImgDominantColorEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imgSize" })
  imgSize?: SearchCseSiterestrictListImgSizeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imgType" })
  imgType?: SearchCseSiterestrictListImgTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=linkSite" })
  linkSite?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lowRange" })
  lowRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lr" })
  lr?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=num" })
  num?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orTerms" })
  orTerms?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relatedSite" })
  relatedSite?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe" })
  safe?: SearchCseSiterestrictListSafeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchType" })
  searchType?: SearchCseSiterestrictListSearchTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteSearch" })
  siteSearch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteSearchFilter" })
  siteSearchFilter?: SearchCseSiterestrictListSiteSearchFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class SearchCseSiterestrictListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCseSiterestrictListQueryParams;
}


export class SearchCseSiterestrictListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  search?: shared.Search;

  @SpeakeasyMetadata()
  statusCode: number;
}
