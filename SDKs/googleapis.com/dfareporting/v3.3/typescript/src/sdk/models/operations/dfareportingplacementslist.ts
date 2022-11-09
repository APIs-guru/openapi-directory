import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DfareportingPlacementsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingPlacementsListCompatibilitiesEnum {
    Display = "DISPLAY"
,    DisplayInterstitial = "DISPLAY_INTERSTITIAL"
,    App = "APP"
,    AppInterstitial = "APP_INTERSTITIAL"
,    InStreamVideo = "IN_STREAM_VIDEO"
,    InStreamAudio = "IN_STREAM_AUDIO"
}

export enum DfareportingPlacementsListPaymentSourceEnum {
    PlacementAgencyPaid = "PLACEMENT_AGENCY_PAID"
,    PlacementPublisherPaid = "PLACEMENT_PUBLISHER_PAID"
}

export enum DfareportingPlacementsListPricingTypesEnum {
    PricingTypeCpm = "PRICING_TYPE_CPM"
,    PricingTypeCpc = "PRICING_TYPE_CPC"
,    PricingTypeCpa = "PRICING_TYPE_CPA"
,    PricingTypeFlatRateImpressions = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
,    PricingTypeFlatRateClicks = "PRICING_TYPE_FLAT_RATE_CLICKS"
,    PricingTypeCpmActiveview = "PRICING_TYPE_CPM_ACTIVEVIEW"
}

export enum DfareportingPlacementsListSortFieldEnum {
    Id = "ID"
,    Name = "NAME"
}

export enum DfareportingPlacementsListSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


export class DfareportingPlacementsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=advertiserIds" })
  advertiserIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=archived" })
  archived?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=campaignIds" })
  campaignIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=compatibilities" })
  compatibilities?: DfareportingPlacementsListCompatibilitiesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contentCategoryIds" })
  contentCategoryIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=directorySiteIds" })
  directorySiteIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupIds" })
  groupIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxEndDate" })
  maxEndDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxStartDate" })
  maxStartDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minEndDate" })
  minEndDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minStartDate" })
  minStartDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=paymentSource" })
  paymentSource?: DfareportingPlacementsListPaymentSourceEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=placementStrategyIds" })
  placementStrategyIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pricingTypes" })
  pricingTypes?: DfareportingPlacementsListPricingTypesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=siteIds" })
  siteIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sizeIds" })
  sizeIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingPlacementsListSortFieldEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingPlacementsListSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingPlacementsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingPlacementsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DfareportingPlacementsListPathParams;

  @Metadata()
  queryParams: DfareportingPlacementsListQueryParams;

  @Metadata()
  security: DfareportingPlacementsListSecurity;
}


export class DfareportingPlacementsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  placementsListResponse?: shared.PlacementsListResponse;

  @Metadata()
  statusCode: number;
}
