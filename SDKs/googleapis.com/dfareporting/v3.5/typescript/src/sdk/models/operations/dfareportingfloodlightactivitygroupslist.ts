import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DfareportingFloodlightActivityGroupsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingFloodlightActivityGroupsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}

export enum DfareportingFloodlightActivityGroupsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}

export enum DfareportingFloodlightActivityGroupsListTypeEnum {
    Counter = "COUNTER",
    Sale = "SALE"
}


export class DfareportingFloodlightActivityGroupsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightConfigurationId" })
  floodlightConfigurationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingFloodlightActivityGroupsListSortFieldEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingFloodlightActivityGroupsListSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DfareportingFloodlightActivityGroupsListTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingFloodlightActivityGroupsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingFloodlightActivityGroupsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DfareportingFloodlightActivityGroupsListPathParams;

  @SpeakeasyMetadata()
  queryParams: DfareportingFloodlightActivityGroupsListQueryParams;

  @SpeakeasyMetadata()
  security: DfareportingFloodlightActivityGroupsListSecurity;
}


export class DfareportingFloodlightActivityGroupsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  floodlightActivityGroupsListResponse?: shared.FloodlightActivityGroupsListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
