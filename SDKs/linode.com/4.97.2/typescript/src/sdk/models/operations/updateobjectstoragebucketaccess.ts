import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateObjectStorageBucketAccessServerList = [
	"https://api.linode.com/v4",
] as const;


export class UpdateObjectStorageBucketAccessPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class UpdateObjectStorageBucketAccessSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateObjectStorageBucketAccessDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateObjectStorageBucketAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateObjectStorageBucketAccessPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: UpdateObjectStorageBucketAccessSecurity;
}


export class UpdateObjectStorageBucketAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateObjectStorageBucketAccess200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  updateObjectStorageBucketAccessDefaultApplicationJsonObject?: UpdateObjectStorageBucketAccessDefaultApplicationJson;
}
