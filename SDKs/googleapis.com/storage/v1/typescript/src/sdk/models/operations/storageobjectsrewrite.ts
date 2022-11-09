import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageObjectsRewritePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinationBucket" })
  destinationBucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinationObject" })
  destinationObject: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sourceBucket" })
  sourceBucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sourceObject" })
  sourceObject: string;
}

export enum StorageObjectsRewriteDestinationPredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead"
,    BucketOwnerFullControl = "bucketOwnerFullControl"
,    BucketOwnerRead = "bucketOwnerRead"
,    Private = "private"
,    ProjectPrivate = "projectPrivate"
,    PublicRead = "publicRead"
}

export enum StorageObjectsRewriteProjectionEnum {
    Full = "full"
,    NoAcl = "noAcl"
}


export class StorageObjectsRewriteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=destinationKmsKeyName" })
  destinationKmsKeyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=destinationPredefinedAcl" })
  destinationPredefinedAcl?: StorageObjectsRewriteDestinationPredefinedAclEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxBytesRewrittenPerCall" })
  maxBytesRewrittenPerCall?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: StorageObjectsRewriteProjectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rewriteToken" })
  rewriteToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceGeneration" })
  sourceGeneration?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageObjectsRewriteSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsRewriteSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsRewriteSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsRewriteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageObjectsRewriteSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageObjectsRewriteSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: StorageObjectsRewriteSecurityOption3;
}


export class StorageObjectsRewriteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageObjectsRewritePathParams;

  @Metadata()
  queryParams: StorageObjectsRewriteQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Object;

  @Metadata()
  security: StorageObjectsRewriteSecurity;
}


export class StorageObjectsRewriteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rewriteResponse?: shared.RewriteResponse;

  @Metadata()
  statusCode: number;
}
