import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchCseListImgColorTypeEnum {
    ImgColorTypeUndefined = "imgColorTypeUndefined",
    Mono = "mono",
    Gray = "gray",
    Color = "color",
    Trans = "trans"
}

export enum SearchCseListImgDominantColorEnum {
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

export enum SearchCseListImgSizeEnum {
    ImgSizeUndefined = "imgSizeUndefined",
    Huge = "HUGE",
    Icon = "ICON",
    Large = "LARGE",
    Medium = "MEDIUM",
    Small = "SMALL",
    Xlarge = "XLARGE",
    Xxlarge = "XXLARGE"
}

export enum SearchCseListImgTypeEnum {
    ImgTypeUndefined = "imgTypeUndefined",
    Clipart = "clipart",
    Face = "face",
    Lineart = "lineart",
    Stock = "stock",
    Photo = "photo",
    Animated = "animated"
}

export enum SearchCseListSafeEnum {
    SafeUndefined = "safeUndefined",
    Active = "active",
    High = "high",
    Medium = "medium",
    Off = "off"
}

export enum SearchCseListSearchTypeEnum {
    SearchTypeUndefined = "searchTypeUndefined",
    Image = "image"
}

export enum SearchCseListSiteSearchFilterEnum {
    SiteSearchFilterUndefined = "siteSearchFilterUndefined",
    E = "e",
    I = "i"
}


export class SearchCseListQueryParams extends SpeakeasyBase {
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
  imgColorType?: SearchCseListImgColorTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imgDominantColor" })
  imgDominantColor?: SearchCseListImgDominantColorEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imgSize" })
  imgSize?: SearchCseListImgSizeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imgType" })
  imgType?: SearchCseListImgTypeEnum;

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
  safe?: SearchCseListSafeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchType" })
  searchType?: SearchCseListSearchTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteSearch" })
  siteSearch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteSearchFilter" })
  siteSearchFilter?: SearchCseListSiteSearchFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class SearchCseListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCseListQueryParams;
}


export class SearchCseListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  search?: shared.Search;

  @SpeakeasyMetadata()
  statusCode: number;
}
