import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DrivePermissionsGetIdForEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=email" })
  email: string;
}


export class DrivePermissionsGetIdForEmailQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class DrivePermissionsGetIdForEmailSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption7 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurityOption8 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetIdForEmailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DrivePermissionsGetIdForEmailSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DrivePermissionsGetIdForEmailSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: DrivePermissionsGetIdForEmailSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: DrivePermissionsGetIdForEmailSecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: DrivePermissionsGetIdForEmailSecurityOption5;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option6?: DrivePermissionsGetIdForEmailSecurityOption6;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option7?: DrivePermissionsGetIdForEmailSecurityOption7;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option8?: DrivePermissionsGetIdForEmailSecurityOption8;
}


export class DrivePermissionsGetIdForEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DrivePermissionsGetIdForEmailPathParams;

  @SpeakeasyMetadata()
  queryParams: DrivePermissionsGetIdForEmailQueryParams;

  @SpeakeasyMetadata()
  security: DrivePermissionsGetIdForEmailSecurity;
}


export class DrivePermissionsGetIdForEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  permissionId?: shared.PermissionId;

  @SpeakeasyMetadata()
  statusCode: number;
}
