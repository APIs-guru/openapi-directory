import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DrivePermissionsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissionId" })
  permissionId: string;
}


export class DrivePermissionsGetQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" })
  supportsAllDrives?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" })
  supportsTeamDrives?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useDomainAdminAccess" })
  useDomainAdminAccess?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class DrivePermissionsGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetSecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetSecurityOption6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DrivePermissionsGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DrivePermissionsGetSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: DrivePermissionsGetSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: DrivePermissionsGetSecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: DrivePermissionsGetSecurityOption5;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option6?: DrivePermissionsGetSecurityOption6;
}


export class DrivePermissionsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DrivePermissionsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: DrivePermissionsGetQueryParams;

  @SpeakeasyMetadata()
  security: DrivePermissionsGetSecurity;
}


export class DrivePermissionsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  permission?: shared.Permission;

  @SpeakeasyMetadata()
  statusCode: number;
}
