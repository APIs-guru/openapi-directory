import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageObjectsInsertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;
}

export enum StorageObjectsInsertProjectionEnum {
    Full = "full"
,    NoAcl = "noAcl"
}


export class StorageObjectsInsertQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ifGenerationMatch" })
  ifGenerationMatch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ifGenerationNotMatch" })
  ifGenerationNotMatch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" })
  ifMetagenerationMatch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" })
  ifMetagenerationNotMatch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: StorageObjectsInsertProjectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class StorageObjectsInsertSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsInsertSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageObjectsInsertSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageObjectsInsertSecurityOption2;
}


export class StorageObjectsInsertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageObjectsInsertPathParams;

  @Metadata()
  queryParams: StorageObjectsInsertQueryParams;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;

  @Metadata()
  security: StorageObjectsInsertSecurity;
}


export class StorageObjectsInsertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  object?: shared.Object;

  @Metadata()
  statusCode: number;
}
