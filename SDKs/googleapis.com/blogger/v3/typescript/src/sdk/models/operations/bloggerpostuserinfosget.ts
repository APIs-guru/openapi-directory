import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BloggerPostUserInfosGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=blogId" })
  blogId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=postId" })
  postId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class BloggerPostUserInfosGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxComments" })
  maxComments?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BloggerPostUserInfosGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BloggerPostUserInfosGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BloggerPostUserInfosGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BloggerPostUserInfosGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BloggerPostUserInfosGetSecurityOption2;
}


export class BloggerPostUserInfosGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BloggerPostUserInfosGetPathParams;

  @Metadata()
  queryParams: BloggerPostUserInfosGetQueryParams;

  @Metadata()
  security: BloggerPostUserInfosGetSecurity;
}


export class BloggerPostUserInfosGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postUserInfo?: shared.PostUserInfo;

  @Metadata()
  statusCode: number;
}
