import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageDefaultObjectAccessControlsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=entity" })
  entity: string;
}


export class StorageDefaultObjectAccessControlsGetQueryParams extends SpeakeasyBase {
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


export class StorageDefaultObjectAccessControlsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageDefaultObjectAccessControlsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageDefaultObjectAccessControlsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageDefaultObjectAccessControlsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageDefaultObjectAccessControlsGetSecurityOption2;
}


export class StorageDefaultObjectAccessControlsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageDefaultObjectAccessControlsGetPathParams;

  @Metadata()
  queryParams: StorageDefaultObjectAccessControlsGetQueryParams;

  @Metadata()
  security: StorageDefaultObjectAccessControlsGetSecurity;
}


export class StorageDefaultObjectAccessControlsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objectAccessControl?: shared.ObjectAccessControl;

  @Metadata()
  statusCode: number;
}
