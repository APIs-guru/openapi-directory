import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BloggerPostsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=blogId" })
  blogId: string;
}

export enum BloggerPostsListOrderByEnum {
    OrderByUnspecified = "ORDER_BY_UNSPECIFIED"
,    Published = "PUBLISHED"
,    Updated = "UPDATED"
}

export enum BloggerPostsListStatusEnum {
    Live = "LIVE"
,    Draft = "DRAFT"
,    Scheduled = "SCHEDULED"
,    SoftTrashed = "SOFT_TRASHED"
}

export enum BloggerPostsListViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED"
,    Reader = "READER"
,    Author = "AUTHOR"
,    Admin = "ADMIN"
}


export class BloggerPostsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=fetchImages" })
  fetchImages?: boolean;

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
  orderBy?: BloggerPostsListOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: BloggerPostsListStatusEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: BloggerPostsListViewEnum;
}


export class BloggerPostsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BloggerPostsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BloggerPostsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BloggerPostsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BloggerPostsListSecurityOption2;
}


export class BloggerPostsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BloggerPostsListPathParams;

  @Metadata()
  queryParams: BloggerPostsListQueryParams;

  @Metadata()
  security: BloggerPostsListSecurity;
}


export class BloggerPostsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postList?: shared.PostList;

  @Metadata()
  statusCode: number;
}
