import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageDefaultObjectAccessControlsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=entity" })
  entity: string;
}


export class StorageDefaultObjectAccessControlsUpdateQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageDefaultObjectAccessControlsUpdateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageDefaultObjectAccessControlsUpdateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageDefaultObjectAccessControlsUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageDefaultObjectAccessControlsUpdateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageDefaultObjectAccessControlsUpdateSecurityOption2;
}


export class StorageDefaultObjectAccessControlsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageDefaultObjectAccessControlsUpdatePathParams;

  @Metadata()
  queryParams: StorageDefaultObjectAccessControlsUpdateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ObjectAccessControl;

  @Metadata()
  security: StorageDefaultObjectAccessControlsUpdateSecurity;
}


export class StorageDefaultObjectAccessControlsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objectAccessControl?: shared.ObjectAccessControl;

  @Metadata()
  statusCode: number;
}
