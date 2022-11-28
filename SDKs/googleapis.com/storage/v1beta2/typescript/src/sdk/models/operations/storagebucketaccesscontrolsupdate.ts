import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StorageBucketAccessControlsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entity" })
  entity: string;
}


export class StorageBucketAccessControlsUpdateQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class StorageBucketAccessControlsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketAccessControlsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StorageBucketAccessControlsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: StorageBucketAccessControlsUpdateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BucketAccessControl;

  @SpeakeasyMetadata()
  security: StorageBucketAccessControlsUpdateSecurity;
}


export class StorageBucketAccessControlsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bucketAccessControl?: shared.BucketAccessControl;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
