import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StorageObjectsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}

export enum StorageObjectsGetProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}


export class StorageObjectsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifGenerationMatch" })
  ifGenerationMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifGenerationNotMatch" })
  ifGenerationNotMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" })
  ifMetagenerationMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" })
  ifMetagenerationNotMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: StorageObjectsGetProjectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageObjectsGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsGetSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsGetSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsGetSecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: StorageObjectsGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: StorageObjectsGetSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: StorageObjectsGetSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: StorageObjectsGetSecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: StorageObjectsGetSecurityOption5;
}


export class StorageObjectsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StorageObjectsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: StorageObjectsGetQueryParams;

  @SpeakeasyMetadata()
  security: StorageObjectsGetSecurity;
}


export class StorageObjectsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: shared.Object;

  @SpeakeasyMetadata()
  statusCode: number;
}
