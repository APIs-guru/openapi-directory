import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StorageObjectsRewritePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinationBucket" })
  destinationBucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinationObject" })
  destinationObject: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sourceBucket" })
  sourceBucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sourceObject" })
  sourceObject: string;
}

export enum StorageObjectsRewriteDestinationPredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}

export enum StorageObjectsRewriteProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}


export class StorageObjectsRewriteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationKmsKeyName" })
  destinationKmsKeyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationPredefinedAcl" })
  destinationPredefinedAcl?: StorageObjectsRewriteDestinationPredefinedAclEnum;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxBytesRewrittenPerCall" })
  maxBytesRewrittenPerCall?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: StorageObjectsRewriteProjectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rewriteToken" })
  rewriteToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceGeneration" })
  sourceGeneration?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageObjectsRewriteSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsRewriteSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsRewriteSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsRewriteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: StorageObjectsRewriteSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: StorageObjectsRewriteSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: StorageObjectsRewriteSecurityOption3;
}


export class StorageObjectsRewriteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StorageObjectsRewritePathParams;

  @SpeakeasyMetadata()
  queryParams: StorageObjectsRewriteQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Object;

  @SpeakeasyMetadata()
  security: StorageObjectsRewriteSecurity;
}


export class StorageObjectsRewriteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rewriteResponse?: shared.RewriteResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
