import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchCseListImgColorTypeEnum {
    ImgColorTypeUndefined = "imgColorTypeUndefined"
,    Mono = "mono"
,    Gray = "gray"
,    Color = "color"
,    Trans = "trans"
}

export enum SearchCseListImgDominantColorEnum {
    ImgDominantColorUndefined = "imgDominantColorUndefined"
,    Black = "black"
,    Blue = "blue"
,    Brown = "brown"
,    Gray = "gray"
,    Green = "green"
,    Orange = "orange"
,    Pink = "pink"
,    Purple = "purple"
,    Red = "red"
,    Teal = "teal"
,    White = "white"
,    Yellow = "yellow"
}

export enum SearchCseListImgSizeEnum {
    ImgSizeUndefined = "imgSizeUndefined"
,    Huge = "HUGE"
,    Icon = "ICON"
,    Large = "LARGE"
,    Medium = "MEDIUM"
,    Small = "SMALL"
,    Xlarge = "XLARGE"
,    Xxlarge = "XXLARGE"
}

export enum SearchCseListImgTypeEnum {
    ImgTypeUndefined = "imgTypeUndefined"
,    Clipart = "clipart"
,    Face = "face"
,    Lineart = "lineart"
,    Stock = "stock"
,    Photo = "photo"
,    Animated = "animated"
}

export enum SearchCseListSafeEnum {
    SafeUndefined = "safeUndefined"
,    Active = "active"
,    High = "high"
,    Medium = "medium"
,    Off = "off"
}

export enum SearchCseListSearchTypeEnum {
    SearchTypeUndefined = "searchTypeUndefined"
,    Image = "image"
}

export enum SearchCseListSiteSearchFilterEnum {
    SiteSearchFilterUndefined = "siteSearchFilterUndefined"
,    E = "e"
,    I = "i"
}


export class SearchCseListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=c2coff" })
  c2coff?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cr" })
  cr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cx" })
  cx?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateRestrict" })
  dateRestrict?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exactTerms" })
  exactTerms?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeTerms" })
  excludeTerms?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fileType" })
  fileType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gl" })
  gl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=googlehost" })
  googlehost?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=highRange" })
  highRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hl" })
  hl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hq" })
  hq?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=imgColorType" })
  imgColorType?: SearchCseListImgColorTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=imgDominantColor" })
  imgDominantColor?: SearchCseListImgDominantColorEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=imgSize" })
  imgSize?: SearchCseListImgSizeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=imgType" })
  imgType?: SearchCseListImgTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=linkSite" })
  linkSite?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lowRange" })
  lowRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lr" })
  lr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=num" })
  num?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orTerms" })
  orTerms?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=relatedSite" })
  relatedSite?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=safe" })
  safe?: SearchCseListSafeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchType" })
  searchType?: SearchCseListSearchTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=siteSearch" })
  siteSearch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=siteSearchFilter" })
  siteSearchFilter?: SearchCseListSiteSearchFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class SearchCseListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchCseListQueryParams;
}


export class SearchCseListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  search?: shared.Search;

  @Metadata()
  statusCode: number;
}
