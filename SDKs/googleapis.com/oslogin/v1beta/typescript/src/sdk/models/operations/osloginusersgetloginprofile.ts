import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OsloginUsersGetLoginProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum OsloginUsersGetLoginProfileViewEnum {
    LoginProfileViewUnspecified = "LOGIN_PROFILE_VIEW_UNSPECIFIED"
,    Basic = "BASIC"
,    SecurityKey = "SECURITY_KEY"
}


export class OsloginUsersGetLoginProfileQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projectId" })
  projectId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=systemId" })
  systemId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: OsloginUsersGetLoginProfileViewEnum;
}


export class OsloginUsersGetLoginProfileSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class OsloginUsersGetLoginProfileSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class OsloginUsersGetLoginProfileSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class OsloginUsersGetLoginProfileSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class OsloginUsersGetLoginProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: OsloginUsersGetLoginProfileSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: OsloginUsersGetLoginProfileSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: OsloginUsersGetLoginProfileSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: OsloginUsersGetLoginProfileSecurityOption4;
}


export class OsloginUsersGetLoginProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OsloginUsersGetLoginProfilePathParams;

  @Metadata()
  queryParams: OsloginUsersGetLoginProfileQueryParams;

  @Metadata()
  security: OsloginUsersGetLoginProfileSecurity;
}


export class OsloginUsersGetLoginProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  loginProfile?: shared.LoginProfile;

  @Metadata()
  statusCode: number;
}
