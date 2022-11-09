import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DfareportingSitesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingSitesListSortFieldEnum {
    Id = "ID"
,    Name = "NAME"
}

export enum DfareportingSitesListSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


export class DfareportingSitesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=acceptsInStreamVideoPlacements" })
  acceptsInStreamVideoPlacements?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=acceptsInterstitialPlacements" })
  acceptsInterstitialPlacements?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=acceptsPublisherPaidPlacements" })
  acceptsPublisherPaidPlacements?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=adWordsSite" })
  adWordsSite?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=approved" })
  approved?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=campaignIds" })
  campaignIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=directorySiteIds" })
  directorySiteIds?: string[];

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingSitesListSortFieldEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingSitesListSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unmappedSite" })
  unmappedSite?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingSitesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingSitesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DfareportingSitesListPathParams;

  @Metadata()
  queryParams: DfareportingSitesListQueryParams;

  @Metadata()
  security: DfareportingSitesListSecurity;
}


export class DfareportingSitesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sitesListResponse?: shared.SitesListResponse;

  @Metadata()
  statusCode: number;
}
