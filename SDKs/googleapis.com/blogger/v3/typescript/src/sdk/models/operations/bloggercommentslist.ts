import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BloggerCommentsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=blogId" })
  blogId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=postId" })
  postId: string;
}

export enum BloggerCommentsListStatusEnum {
    Live = "LIVE"
,    Emptied = "EMPTIED"
,    Pending = "PENDING"
,    Spam = "SPAM"
}

export enum BloggerCommentsListViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED"
,    Reader = "READER"
,    Author = "AUTHOR"
,    Admin = "ADMIN"
}


export class BloggerCommentsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: BloggerCommentsListStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: BloggerCommentsListViewEnum;
}


export class BloggerCommentsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BloggerCommentsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BloggerCommentsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BloggerCommentsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BloggerCommentsListSecurityOption2;
}


export class BloggerCommentsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BloggerCommentsListPathParams;

  @Metadata()
  queryParams: BloggerCommentsListQueryParams;

  @Metadata()
  security: BloggerCommentsListSecurity;
}


export class BloggerCommentsListResponse extends SpeakeasyBase {
  @Metadata()
  commentList?: shared.CommentList;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
