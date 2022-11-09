import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DfareportingAdsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingAdsListCompatibilityEnum {
    Display = "DISPLAY"
,    DisplayInterstitial = "DISPLAY_INTERSTITIAL"
,    App = "APP"
,    AppInterstitial = "APP_INTERSTITIAL"
,    InStreamVideo = "IN_STREAM_VIDEO"
,    InStreamAudio = "IN_STREAM_AUDIO"
}

export enum DfareportingAdsListSortFieldEnum {
    Id = "ID"
,    Name = "NAME"
}

export enum DfareportingAdsListSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}

export enum DfareportingAdsListTypeEnum {
    AdServingStandardAd = "AD_SERVING_STANDARD_AD"
,    AdServingDefaultAd = "AD_SERVING_DEFAULT_AD"
,    AdServingClickTracker = "AD_SERVING_CLICK_TRACKER"
,    AdServingTracking = "AD_SERVING_TRACKING"
,    AdServingBrandSafeAd = "AD_SERVING_BRAND_SAFE_AD"
}


export class DfareportingAdsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=audienceSegmentIds" })
  audienceSegmentIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=campaignIds" })
  campaignIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=compatibility" })
  compatibility?: DfareportingAdsListCompatibilityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=creativeIds" })
  creativeIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=creativeOptimizationConfigurationIds" })
  creativeOptimizationConfigurationIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=dynamicClickTracker" })
  dynamicClickTracker?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=landingPageIds" })
  landingPageIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=overriddenEventTagId" })
  overriddenEventTagId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=placementIds" })
  placementIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=remarketingListIds" })
  remarketingListIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sizeIds" })
  sizeIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingAdsListSortFieldEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingAdsListSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sslCompliant" })
  sslCompliant?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sslRequired" })
  sslRequired?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DfareportingAdsListTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingAdsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingAdsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DfareportingAdsListPathParams;

  @Metadata()
  queryParams: DfareportingAdsListQueryParams;

  @Metadata()
  security: DfareportingAdsListSecurity;
}


export class DfareportingAdsListResponse extends SpeakeasyBase {
  @Metadata()
  adsListResponse?: shared.AdsListResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
