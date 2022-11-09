import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageObjectsComposePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinationBucket" })
  destinationBucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinationObject" })
  destinationObject: string;
}

export enum StorageObjectsComposeDestinationPredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead"
,    BucketOwnerFullControl = "bucketOwnerFullControl"
,    BucketOwnerRead = "bucketOwnerRead"
,    Private = "private"
,    ProjectPrivate = "projectPrivate"
,    PublicRead = "publicRead"
}


export class StorageObjectsComposeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=destinationPredefinedAcl" })
  destinationPredefinedAcl?: StorageObjectsComposeDestinationPredefinedAclEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ifGenerationMatch" })
  ifGenerationMatch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" })
  ifMetagenerationMatch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=kmsKeyName" })
  kmsKeyName?: string;

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


export class StorageObjectsComposeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsComposeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsComposeSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsComposeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageObjectsComposeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageObjectsComposeSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: StorageObjectsComposeSecurityOption3;
}


export class StorageObjectsComposeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageObjectsComposePathParams;

  @Metadata()
  queryParams: StorageObjectsComposeQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ComposeRequest;

  @Metadata()
  security: StorageObjectsComposeSecurity;
}


export class StorageObjectsComposeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  object?: shared.Object;

  @Metadata()
  statusCode: number;
}
