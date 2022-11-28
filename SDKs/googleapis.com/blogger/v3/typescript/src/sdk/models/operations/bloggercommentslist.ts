import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BloggerCommentsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blogId" })
  blogId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=postId" })
  postId: string;
}

export enum BloggerCommentsListStatusEnum {
    Live = "LIVE",
    Emptied = "EMPTIED",
    Pending = "PENDING",
    Spam = "SPAM"
}

export enum BloggerCommentsListViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}


export class BloggerCommentsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fetchBodies" })
  fetchBodies?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: BloggerCommentsListStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: BloggerCommentsListViewEnum;
}


export class BloggerCommentsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BloggerCommentsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BloggerCommentsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: BloggerCommentsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: BloggerCommentsListSecurityOption2;
}


export class BloggerCommentsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BloggerCommentsListPathParams;

  @SpeakeasyMetadata()
  queryParams: BloggerCommentsListQueryParams;

  @SpeakeasyMetadata()
  security: BloggerCommentsListSecurity;
}


export class BloggerCommentsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentList?: shared.CommentList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
