import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DrivePermissionsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class DrivePermissionsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=emailMessage" })
  emailMessage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" })
  enforceSingleParent?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=moveToNewOwnersRoot" })
  moveToNewOwnersRoot?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendNotificationEmail" })
  sendNotificationEmail?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" })
  supportsAllDrives?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" })
  supportsTeamDrives?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transferOwnership" })
  transferOwnership?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useDomainAdminAccess" })
  useDomainAdminAccess?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class DrivePermissionsCreateSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsCreateSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DrivePermissionsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DrivePermissionsCreateSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DrivePermissionsCreateSecurityOption2;
}


export class DrivePermissionsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DrivePermissionsCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: DrivePermissionsCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.PermissionInput;

  @SpeakeasyMetadata()
  security: DrivePermissionsCreateSecurity;
}


export class DrivePermissionsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  permission?: shared.Permission;

  @SpeakeasyMetadata()
  statusCode: number;
}
