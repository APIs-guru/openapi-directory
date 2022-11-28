import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OsloginUsersImportSshPublicKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum OsloginUsersImportSshPublicKeyViewEnum {
    LoginProfileViewUnspecified = "LOGIN_PROFILE_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    SecurityKey = "SECURITY_KEY"
}


export class OsloginUsersImportSshPublicKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: OsloginUsersImportSshPublicKeyViewEnum;
}


export class OsloginUsersImportSshPublicKeySecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class OsloginUsersImportSshPublicKeySecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class OsloginUsersImportSshPublicKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: OsloginUsersImportSshPublicKeySecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: OsloginUsersImportSshPublicKeySecurityOption2;
}


export class OsloginUsersImportSshPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OsloginUsersImportSshPublicKeyPathParams;

  @SpeakeasyMetadata()
  queryParams: OsloginUsersImportSshPublicKeyQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SshPublicKeyInput;

  @SpeakeasyMetadata()
  security: OsloginUsersImportSshPublicKeySecurity;
}


export class OsloginUsersImportSshPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  importSshPublicKeyResponse?: shared.ImportSshPublicKeyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
