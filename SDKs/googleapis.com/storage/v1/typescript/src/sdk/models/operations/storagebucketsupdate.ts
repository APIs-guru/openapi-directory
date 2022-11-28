import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StorageBucketsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;
}

export enum StorageBucketsUpdatePredefinedAclEnum {
    AuthenticatedRead = "authenticatedRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead",
    PublicReadWrite = "publicReadWrite"
}

export enum StorageBucketsUpdatePredefinedDefaultObjectAclEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}

export enum StorageBucketsUpdateProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}


export class StorageBucketsUpdateQueryParams extends SpeakeasyBase {
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
  predefinedAcl?: StorageBucketsUpdatePredefinedAclEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=predefinedDefaultObjectAcl" })
  predefinedDefaultObjectAcl?: StorageBucketsUpdatePredefinedDefaultObjectAclEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: StorageBucketsUpdateProjectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageBucketsUpdateSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsUpdateSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: StorageBucketsUpdateSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: StorageBucketsUpdateSecurityOption2;
}


export class StorageBucketsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StorageBucketsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: StorageBucketsUpdateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Bucket;

  @SpeakeasyMetadata()
  security: StorageBucketsUpdateSecurity;
}


export class StorageBucketsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bucket?: shared.Bucket;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
