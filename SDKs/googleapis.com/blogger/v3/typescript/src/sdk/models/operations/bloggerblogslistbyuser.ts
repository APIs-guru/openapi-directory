import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BloggerBlogsListByUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum BloggerBlogsListByUserRoleEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED"
,    Reader = "READER"
,    Author = "AUTHOR"
,    Admin = "ADMIN"
}

export enum BloggerBlogsListByUserStatusEnum {
    Live = "LIVE"
,    Deleted = "DELETED"
}

export enum BloggerBlogsListByUserViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED"
,    Reader = "READER"
,    Author = "AUTHOR"
,    Admin = "ADMIN"
}


export class BloggerBlogsListByUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fetchUserInfo" })
  fetchUserInfo?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: BloggerBlogsListByUserRoleEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: BloggerBlogsListByUserStatusEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: BloggerBlogsListByUserViewEnum;
}


export class BloggerBlogsListByUserSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BloggerBlogsListByUserSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BloggerBlogsListByUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BloggerBlogsListByUserSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BloggerBlogsListByUserSecurityOption2;
}


export class BloggerBlogsListByUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BloggerBlogsListByUserPathParams;

  @Metadata()
  queryParams: BloggerBlogsListByUserQueryParams;

  @Metadata()
  security: BloggerBlogsListByUserSecurity;
}


export class BloggerBlogsListByUserResponse extends SpeakeasyBase {
  @Metadata()
  blogList?: shared.BlogList;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
