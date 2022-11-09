import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DfareportingCreativesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingCreativesListSortFieldEnum {
    Id = "ID"
,    Name = "NAME"
}

export enum DfareportingCreativesListSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}

export enum DfareportingCreativesListTypesEnum {
    Image = "IMAGE"
,    DisplayRedirect = "DISPLAY_REDIRECT"
,    CustomDisplay = "CUSTOM_DISPLAY"
,    InternalRedirect = "INTERNAL_REDIRECT"
,    CustomDisplayInterstitial = "CUSTOM_DISPLAY_INTERSTITIAL"
,    InterstitialInternalRedirect = "INTERSTITIAL_INTERNAL_REDIRECT"
,    TrackingText = "TRACKING_TEXT"
,    RichMediaDisplayBanner = "RICH_MEDIA_DISPLAY_BANNER"
,    RichMediaInpageFloating = "RICH_MEDIA_INPAGE_FLOATING"
,    RichMediaImExpand = "RICH_MEDIA_IM_EXPAND"
,    RichMediaDisplayExpanding = "RICH_MEDIA_DISPLAY_EXPANDING"
,    RichMediaDisplayInterstitial = "RICH_MEDIA_DISPLAY_INTERSTITIAL"
,    RichMediaDisplayMultiFloatingInterstitial = "RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL"
,    RichMediaMobileInApp = "RICH_MEDIA_MOBILE_IN_APP"
,    FlashInpage = "FLASH_INPAGE"
,    InstreamVideo = "INSTREAM_VIDEO"
,    VpaidLinearVideo = "VPAID_LINEAR_VIDEO"
,    VpaidNonLinearVideo = "VPAID_NON_LINEAR_VIDEO"
,    InstreamVideoRedirect = "INSTREAM_VIDEO_REDIRECT"
,    RichMediaPeelDown = "RICH_MEDIA_PEEL_DOWN"
,    Html5Banner = "HTML5_BANNER"
,    Display = "DISPLAY"
,    DisplayImageGallery = "DISPLAY_IMAGE_GALLERY"
,    BrandSafeDefaultInstreamVideo = "BRAND_SAFE_DEFAULT_INSTREAM_VIDEO"
,    InstreamAudio = "INSTREAM_AUDIO"
}


export class DfareportingCreativesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=active" })
  active?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=archived" })
  archived?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=companionCreativeIds" })
  companionCreativeIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=creativeFieldIds" })
  creativeFieldIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=renderingIds" })
  renderingIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sizeIds" })
  sizeIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingCreativesListSortFieldEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingCreativesListSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=studioCreativeId" })
  studioCreativeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=types" })
  types?: DfareportingCreativesListTypesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingCreativesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingCreativesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DfareportingCreativesListPathParams;

  @Metadata()
  queryParams: DfareportingCreativesListQueryParams;

  @Metadata()
  security: DfareportingCreativesListSecurity;
}


export class DfareportingCreativesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  creativesListResponse?: shared.CreativesListResponse;

  @Metadata()
  statusCode: number;
}
