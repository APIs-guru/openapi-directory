import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageObjectsCopyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinationBucket" })
  destinationBucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinationObject" })
  destinationObject: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sourceBucket" })
  sourceBucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sourceObject" })
  sourceObject: string;
}

export enum StorageObjectsCopyProjectionEnum {
    Full = "full"
,    NoAcl = "noAcl"
}


export class StorageObjectsCopyQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=ifSourceGenerationMatch" })
  ifSourceGenerationMatch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ifSourceGenerationNotMatch" })
  ifSourceGenerationNotMatch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ifSourceMetagenerationMatch" })
  ifSourceMetagenerationMatch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ifSourceMetagenerationNotMatch" })
  ifSourceMetagenerationNotMatch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: StorageObjectsCopyProjectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceGeneration" })
  sourceGeneration?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class StorageObjectsCopySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsCopySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsCopySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageObjectsCopySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageObjectsCopySecurityOption2;
}


export class StorageObjectsCopyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageObjectsCopyPathParams;

  @Metadata()
  queryParams: StorageObjectsCopyQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Object;

  @Metadata()
  security: StorageObjectsCopySecurity;
}


export class StorageObjectsCopyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  object?: shared.Object;

  @Metadata()
  statusCode: number;
}
