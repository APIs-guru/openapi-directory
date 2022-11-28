import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DfareportingPlacementGroupsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingPlacementGroupsListPlacementGroupTypeEnum {
    PlacementPackage = "PLACEMENT_PACKAGE",
    PlacementRoadblock = "PLACEMENT_ROADBLOCK"
}

export enum DfareportingPlacementGroupsListPricingTypesEnum {
    PricingTypeCpm = "PRICING_TYPE_CPM",
    PricingTypeCpc = "PRICING_TYPE_CPC",
    PricingTypeCpa = "PRICING_TYPE_CPA",
    PricingTypeFlatRateImpressions = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS",
    PricingTypeFlatRateClicks = "PRICING_TYPE_FLAT_RATE_CLICKS",
    PricingTypeCpmActiveview = "PRICING_TYPE_CPM_ACTIVEVIEW"
}

export enum DfareportingPlacementGroupsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}

export enum DfareportingPlacementGroupsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


export class DfareportingPlacementGroupsListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentCategoryIds" })
  contentCategoryIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=directorySiteIds" })
  directorySiteIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placementGroupType" })
  placementGroupType?: DfareportingPlacementGroupsListPlacementGroupTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placementStrategyIds" })
  placementStrategyIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pricingTypes" })
  pricingTypes?: DfareportingPlacementGroupsListPricingTypesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteIds" })
  siteIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingPlacementGroupsListSortFieldEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingPlacementGroupsListSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingPlacementGroupsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingPlacementGroupsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DfareportingPlacementGroupsListPathParams;

  @SpeakeasyMetadata()
  queryParams: DfareportingPlacementGroupsListQueryParams;

  @SpeakeasyMetadata()
  security: DfareportingPlacementGroupsListSecurity;
}


export class DfareportingPlacementGroupsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  placementGroupsListResponse?: shared.PlacementGroupsListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
