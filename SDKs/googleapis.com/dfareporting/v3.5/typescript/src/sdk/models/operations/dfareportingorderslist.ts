import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DfareportingOrdersListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}

export enum DfareportingOrdersListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}

export enum DfareportingOrdersListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


export class DfareportingOrdersListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteId" })
  siteId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingOrdersListSortFieldEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingOrdersListSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingOrdersListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingOrdersListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DfareportingOrdersListPathParams;

  @SpeakeasyMetadata()
  queryParams: DfareportingOrdersListQueryParams;

  @SpeakeasyMetadata()
  security: DfareportingOrdersListSecurity;
}


export class DfareportingOrdersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ordersListResponse?: shared.OrdersListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
