import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StorageBucketAccessControlsInsertPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;
}


export class StorageBucketAccessControlsInsertQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageBucketAccessControlsInsertSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketAccessControlsInsertSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketAccessControlsInsertSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: StorageBucketAccessControlsInsertSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: StorageBucketAccessControlsInsertSecurityOption2;
}


export class StorageBucketAccessControlsInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StorageBucketAccessControlsInsertPathParams;

  @SpeakeasyMetadata()
  queryParams: StorageBucketAccessControlsInsertQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BucketAccessControl;

  @SpeakeasyMetadata()
  security: StorageBucketAccessControlsInsertSecurity;
}


export class StorageBucketAccessControlsInsertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bucketAccessControl?: shared.BucketAccessControl;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
