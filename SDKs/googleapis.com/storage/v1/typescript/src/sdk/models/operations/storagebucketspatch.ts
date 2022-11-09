import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageBucketsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;
}

export enum StorageBucketsPatchPredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead"
,    Private = "private"
,    ProjectPrivate = "projectPrivate"
,    PublicRead = "publicRead"
,    PublicReadWrite = "publicReadWrite"
}

export enum StorageBucketsPatchPredefinedDefaultObjectAclEnum {
    AuthenticatedRead = "authenticatedRead"
,    BucketOwnerFullControl = "bucketOwnerFullControl"
,    BucketOwnerRead = "bucketOwnerRead"
,    Private = "private"
,    ProjectPrivate = "projectPrivate"
,    PublicRead = "publicRead"
}

export enum StorageBucketsPatchProjectionEnum {
    Full = "full"
,    NoAcl = "noAcl"
}


export class StorageBucketsPatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" })
  ifMetagenerationMatch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" })
  ifMetagenerationNotMatch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=predefinedAcl" })
  predefinedAcl?: StorageBucketsPatchPredefinedAclEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=predefinedDefaultObjectAcl" })
  predefinedDefaultObjectAcl?: StorageBucketsPatchPredefinedDefaultObjectAclEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: StorageBucketsPatchProjectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageBucketsPatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsPatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageBucketsPatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageBucketsPatchSecurityOption2;
}


export class StorageBucketsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageBucketsPatchPathParams;

  @Metadata()
  queryParams: StorageBucketsPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Bucket;

  @Metadata()
  security: StorageBucketsPatchSecurity;
}


export class StorageBucketsPatchResponse extends SpeakeasyBase {
  @Metadata()
  bucket?: shared.Bucket;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
