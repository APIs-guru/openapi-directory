import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DfareportingAdvertisersListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingAdvertisersListSortFieldEnum {
    Id = "ID"
,    Name = "NAME"
}

export enum DfareportingAdvertisersListSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}

export enum DfareportingAdvertisersListStatusEnum {
    Approved = "APPROVED"
,    OnHold = "ON_HOLD"
}


export class DfareportingAdvertisersListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=advertiserGroupIds" })
  advertiserGroupIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=floodlightConfigurationIds" })
  floodlightConfigurationIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeAdvertisersWithoutGroupsOnly" })
  includeAdvertisersWithoutGroupsOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onlyParent" })
  onlyParent?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingAdvertisersListSortFieldEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingAdvertisersListSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: DfareportingAdvertisersListStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingAdvertisersListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingAdvertisersListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DfareportingAdvertisersListPathParams;

  @Metadata()
  queryParams: DfareportingAdvertisersListQueryParams;

  @Metadata()
  security: DfareportingAdvertisersListSecurity;
}


export class DfareportingAdvertisersListResponse extends SpeakeasyBase {
  @Metadata()
  advertisersListResponse?: shared.AdvertisersListResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
