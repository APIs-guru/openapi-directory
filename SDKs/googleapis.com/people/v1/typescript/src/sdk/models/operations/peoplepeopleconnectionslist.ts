import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PeoplePeopleConnectionsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceName" })
  resourceName: string;
}

export enum PeoplePeopleConnectionsListSortOrderEnum {
    LastModifiedAscending = "LAST_MODIFIED_ASCENDING"
,    LastModifiedDescending = "LAST_MODIFIED_DESCENDING"
,    FirstNameAscending = "FIRST_NAME_ASCENDING"
,    LastNameAscending = "LAST_NAME_ASCENDING"
}

export enum PeoplePeopleConnectionsListSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED"
,    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE"
,    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT"
,    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}


export class PeoplePeopleConnectionsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=personFields" })
  personFields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=requestMask.includeField" })
  requestMaskIncludeField?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=requestSyncToken" })
  requestSyncToken?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: PeoplePeopleConnectionsListSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sources" })
  sources?: PeoplePeopleConnectionsListSourcesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=syncToken" })
  syncToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class PeoplePeopleConnectionsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleConnectionsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleConnectionsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PeoplePeopleConnectionsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PeoplePeopleConnectionsListSecurityOption2;
}


export class PeoplePeopleConnectionsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PeoplePeopleConnectionsListPathParams;

  @Metadata()
  queryParams: PeoplePeopleConnectionsListQueryParams;

  @Metadata()
  security: PeoplePeopleConnectionsListSecurity;
}


export class PeoplePeopleConnectionsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listConnectionsResponse?: shared.ListConnectionsResponse;

  @Metadata()
  statusCode: number;
}
