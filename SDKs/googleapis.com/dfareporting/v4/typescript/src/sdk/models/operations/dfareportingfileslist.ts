import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DfareportingFilesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingFilesListScopeEnum {
    All = "ALL"
,    Mine = "MINE"
,    SharedWithMe = "SHARED_WITH_ME"
}

export enum DfareportingFilesListSortFieldEnum {
    Id = "ID"
,    LastModifiedTime = "LAST_MODIFIED_TIME"
}

export enum DfareportingFilesListSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


export class DfareportingFilesListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: DfareportingFilesListScopeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingFilesListSortFieldEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingFilesListSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingFilesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingFilesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DfareportingFilesListPathParams;

  @Metadata()
  queryParams: DfareportingFilesListQueryParams;

  @Metadata()
  security: DfareportingFilesListSecurity;
}


export class DfareportingFilesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileList?: shared.FileList;

  @Metadata()
  statusCode: number;
}
