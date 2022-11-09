import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BloggerPostUserInfosListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=blogId" })
  blogId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum BloggerPostUserInfosListOrderByEnum {
    OrderByUnspecified = "ORDER_BY_UNSPECIFIED"
,    Published = "PUBLISHED"
,    Updated = "UPDATED"
}

export enum BloggerPostUserInfosListStatusEnum {
    Live = "LIVE"
,    Draft = "DRAFT"
,    Scheduled = "SCHEDULED"
,    SoftTrashed = "SOFT_TRASHED"
}

export enum BloggerPostUserInfosListViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED"
,    Reader = "READER"
,    Author = "AUTHOR"
,    Admin = "ADMIN"
}


export class BloggerPostUserInfosListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fetchBodies" })
  fetchBodies?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=labels" })
  labels?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: BloggerPostUserInfosListOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: BloggerPostUserInfosListStatusEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: BloggerPostUserInfosListViewEnum;
}


export class BloggerPostUserInfosListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BloggerPostUserInfosListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BloggerPostUserInfosListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BloggerPostUserInfosListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BloggerPostUserInfosListSecurityOption2;
}


export class BloggerPostUserInfosListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BloggerPostUserInfosListPathParams;

  @Metadata()
  queryParams: BloggerPostUserInfosListQueryParams;

  @Metadata()
  security: BloggerPostUserInfosListSecurity;
}


export class BloggerPostUserInfosListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postUserInfosList?: shared.PostUserInfosList;

  @Metadata()
  statusCode: number;
}
