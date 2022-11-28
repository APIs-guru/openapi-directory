import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DfareportingPlacementsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingPlacementsListCompatibilitiesEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}

export enum DfareportingPlacementsListPaymentSourceEnum {
    PlacementAgencyPaid = "PLACEMENT_AGENCY_PAID",
    PlacementPublisherPaid = "PLACEMENT_PUBLISHER_PAID"
}

export enum DfareportingPlacementsListPricingTypesEnum {
    PricingTypeCpm = "PRICING_TYPE_CPM",
    PricingTypeCpc = "PRICING_TYPE_CPC",
    PricingTypeCpa = "PRICING_TYPE_CPA",
    PricingTypeFlatRateImpressions = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS",
    PricingTypeFlatRateClicks = "PRICING_TYPE_FLAT_RATE_CLICKS",
    PricingTypeCpmActiveview = "PRICING_TYPE_CPM_ACTIVEVIEW"
}

export enum DfareportingPlacementsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}

export enum DfareportingPlacementsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


export class DfareportingPlacementsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserIds" })
  advertiserIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignIds" })
  campaignIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=compatibilities" })
  compatibilities?: DfareportingPlacementsListCompatibilitiesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentCategoryIds" })
  contentCategoryIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=directorySiteIds" })
  directorySiteIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupIds" })
  groupIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxEndDate" })
  maxEndDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStartDate" })
  maxStartDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minEndDate" })
  minEndDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minStartDate" })
  minStartDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentSource" })
  paymentSource?: DfareportingPlacementsListPaymentSourceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placementStrategyIds" })
  placementStrategyIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pricingTypes" })
  pricingTypes?: DfareportingPlacementsListPricingTypesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteIds" })
  siteIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sizeIds" })
  sizeIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingPlacementsListSortFieldEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingPlacementsListSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingPlacementsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingPlacementsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DfareportingPlacementsListPathParams;

  @SpeakeasyMetadata()
  queryParams: DfareportingPlacementsListQueryParams;

  @SpeakeasyMetadata()
  security: DfareportingPlacementsListSecurity;
}


export class DfareportingPlacementsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  placementsListResponse?: shared.PlacementsListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
