import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StorageObjectsCopyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinationBucket" })
  destinationBucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinationObject" })
  destinationObject: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sourceBucket" })
  sourceBucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sourceObject" })
  sourceObject: string;
}

export enum StorageObjectsCopyDestinationPredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}

export enum StorageObjectsCopyProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}


export class StorageObjectsCopyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationKmsKeyName" })
  destinationKmsKeyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationPredefinedAcl" })
  destinationPredefinedAcl?: StorageObjectsCopyDestinationPredefinedAclEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifGenerationMatch" })
  ifGenerationMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifGenerationNotMatch" })
  ifGenerationNotMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" })
  ifMetagenerationMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" })
  ifMetagenerationNotMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifSourceGenerationMatch" })
  ifSourceGenerationMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifSourceGenerationNotMatch" })
  ifSourceGenerationNotMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifSourceMetagenerationMatch" })
  ifSourceMetagenerationMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifSourceMetagenerationNotMatch" })
  ifSourceMetagenerationNotMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: StorageObjectsCopyProjectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceGeneration" })
  sourceGeneration?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageObjectsCopySecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsCopySecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsCopySecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsCopySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: StorageObjectsCopySecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: StorageObjectsCopySecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: StorageObjectsCopySecurityOption3;
}


export class StorageObjectsCopyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StorageObjectsCopyPathParams;

  @SpeakeasyMetadata()
  queryParams: StorageObjectsCopyQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Object;

  @SpeakeasyMetadata()
  security: StorageObjectsCopySecurity;
}


export class StorageObjectsCopyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: shared.Object;

  @SpeakeasyMetadata()
  statusCode: number;
}
