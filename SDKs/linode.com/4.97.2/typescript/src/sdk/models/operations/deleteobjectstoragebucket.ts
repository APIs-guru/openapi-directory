import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteObjectStorageBucketServerList = [
	"https://api.linode.com/v4",
] as const;


export class DeleteObjectStorageBucketPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class DeleteObjectStorageBucketSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteObjectStorageBucketDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteObjectStorageBucketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteObjectStorageBucketPathParams;

  @SpeakeasyMetadata()
  security: DeleteObjectStorageBucketSecurity;
}


export class DeleteObjectStorageBucketResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteObjectStorageBucket200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteObjectStorageBucketDefaultApplicationJsonObject?: DeleteObjectStorageBucketDefaultApplicationJson;
}
