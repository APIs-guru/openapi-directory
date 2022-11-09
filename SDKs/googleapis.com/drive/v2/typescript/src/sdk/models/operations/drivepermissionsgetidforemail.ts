import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DrivePermissionsGetIdForEmailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=email" })
  email: string;
}


export class DrivePermissionsGetIdForEmailQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class DrivePermissionsGetIdForEmailSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption6 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption7 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption8 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DrivePermissionsGetIdForEmailSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DrivePermissionsGetIdForEmailSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DrivePermissionsGetIdForEmailSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DrivePermissionsGetIdForEmailSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: DrivePermissionsGetIdForEmailSecurityOption5;

  @Metadata({ data: "security, option=true" })
  option6?: DrivePermissionsGetIdForEmailSecurityOption6;

  @Metadata({ data: "security, option=true" })
  option7?: DrivePermissionsGetIdForEmailSecurityOption7;

  @Metadata({ data: "security, option=true" })
  option8?: DrivePermissionsGetIdForEmailSecurityOption8;
}


export class DrivePermissionsGetIdForEmailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DrivePermissionsGetIdForEmailPathParams;

  @Metadata()
  queryParams: DrivePermissionsGetIdForEmailQueryParams;

  @Metadata()
  security: DrivePermissionsGetIdForEmailSecurity;
}


export class DrivePermissionsGetIdForEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  permissionId?: shared.PermissionId;

  @Metadata()
  statusCode: number;
}
