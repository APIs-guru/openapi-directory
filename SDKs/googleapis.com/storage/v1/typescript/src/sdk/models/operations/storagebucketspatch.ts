import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StorageBucketsPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;
}

export enum StorageBucketsPatchPredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead",
    PublicReadWrite = "publicReadWrite"
}

export enum StorageBucketsPatchPredefinedDefaultObjectAclEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}

export enum StorageBucketsPatchProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}


export class StorageBucketsPatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" })
  ifMetagenerationMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" })
  ifMetagenerationNotMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=predefinedAcl" })
  predefinedAcl?: StorageBucketsPatchPredefinedAclEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=predefinedDefaultObjectAcl" })
  predefinedDefaultObjectAcl?: StorageBucketsPatchPredefinedDefaultObjectAclEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: StorageBucketsPatchProjectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageBucketsPatchSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsPatchSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsPatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: StorageBucketsPatchSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: StorageBucketsPatchSecurityOption2;
}


export class StorageBucketsPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StorageBucketsPatchPathParams;

  @SpeakeasyMetadata()
  queryParams: StorageBucketsPatchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Bucket;

  @SpeakeasyMetadata()
  security: StorageBucketsPatchSecurity;
}


export class StorageBucketsPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bucket?: shared.Bucket;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
