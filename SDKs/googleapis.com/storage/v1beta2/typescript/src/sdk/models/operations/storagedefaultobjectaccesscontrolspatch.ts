import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageDefaultObjectAccessControlsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=entity" })
  entity: string;
}


export class StorageDefaultObjectAccessControlsPatchQueryParams extends SpeakeasyBase {
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


export class StorageDefaultObjectAccessControlsPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageDefaultObjectAccessControlsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageDefaultObjectAccessControlsPatchPathParams;

  @Metadata()
  queryParams: StorageDefaultObjectAccessControlsPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ObjectAccessControl;

  @Metadata()
  security: StorageDefaultObjectAccessControlsPatchSecurity;
}


export class StorageDefaultObjectAccessControlsPatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objectAccessControl?: shared.ObjectAccessControl;

  @Metadata()
  statusCode: number;
}
