import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DfareportingAdsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingAdsListCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}

export enum DfareportingAdsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}

export enum DfareportingAdsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}

export enum DfareportingAdsListTypeEnum {
    AdServingStandardAd = "AD_SERVING_STANDARD_AD",
    AdServingDefaultAd = "AD_SERVING_DEFAULT_AD",
    AdServingClickTracker = "AD_SERVING_CLICK_TRACKER",
    AdServingTracking = "AD_SERVING_TRACKING",
    AdServingBrandSafeAd = "AD_SERVING_BRAND_SAFE_AD"
}


export class DfareportingAdsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audienceSegmentIds" })
  audienceSegmentIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignIds" })
  campaignIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=compatibility" })
  compatibility?: DfareportingAdsListCompatibilityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creativeIds" })
  creativeIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creativeOptimizationConfigurationIds" })
  creativeOptimizationConfigurationIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dynamicClickTracker" })
  dynamicClickTracker?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=landingPageIds" })
  landingPageIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=overriddenEventTagId" })
  overriddenEventTagId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placementIds" })
  placementIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remarketingListIds" })
  remarketingListIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sizeIds" })
  sizeIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingAdsListSortFieldEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingAdsListSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sslCompliant" })
  sslCompliant?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sslRequired" })
  sslRequired?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DfareportingAdsListTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingAdsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingAdsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DfareportingAdsListPathParams;

  @SpeakeasyMetadata()
  queryParams: DfareportingAdsListQueryParams;

  @SpeakeasyMetadata()
  security: DfareportingAdsListSecurity;
}


export class DfareportingAdsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  adsListResponse?: shared.AdsListResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
