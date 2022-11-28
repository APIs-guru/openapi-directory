import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StorageObjectAccessControlsInsertPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class StorageObjectAccessControlsInsertQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageObjectAccessControlsInsertSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectAccessControlsInsertSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectAccessControlsInsertSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: StorageObjectAccessControlsInsertSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: StorageObjectAccessControlsInsertSecurityOption2;
}


export class StorageObjectAccessControlsInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StorageObjectAccessControlsInsertPathParams;

  @SpeakeasyMetadata()
  queryParams: StorageObjectAccessControlsInsertQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ObjectAccessControl;

  @SpeakeasyMetadata()
  security: StorageObjectAccessControlsInsertSecurity;
}


export class StorageObjectAccessControlsInsertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  objectAccessControl?: shared.ObjectAccessControl;

  @SpeakeasyMetadata()
  statusCode: number;
}
