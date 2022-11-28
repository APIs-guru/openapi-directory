import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PeoplePeopleConnectionsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceName" })
  resourceName: string;
}

export enum PeoplePeopleConnectionsListSortOrderEnum {
    LastModifiedAscending = "LAST_MODIFIED_ASCENDING",
    LastModifiedDescending = "LAST_MODIFIED_DESCENDING",
    FirstNameAscending = "FIRST_NAME_ASCENDING",
    LastNameAscending = "LAST_NAME_ASCENDING"
}

export enum PeoplePeopleConnectionsListSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}


export class PeoplePeopleConnectionsListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personFields" })
  personFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestMask.includeField" })
  requestMaskIncludeField?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestSyncToken" })
  requestSyncToken?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: PeoplePeopleConnectionsListSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" })
  sources?: PeoplePeopleConnectionsListSourcesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=syncToken" })
  syncToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class PeoplePeopleConnectionsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleConnectionsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleConnectionsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: PeoplePeopleConnectionsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: PeoplePeopleConnectionsListSecurityOption2;
}


export class PeoplePeopleConnectionsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PeoplePeopleConnectionsListPathParams;

  @SpeakeasyMetadata()
  queryParams: PeoplePeopleConnectionsListQueryParams;

  @SpeakeasyMetadata()
  security: PeoplePeopleConnectionsListSecurity;
}


export class PeoplePeopleConnectionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listConnectionsResponse?: shared.ListConnectionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
