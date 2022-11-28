import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetObjectStorageBucketServerList = [
	"https://api.linode.com/v4",
] as const;


export class GetObjectStorageBucketPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class GetObjectStorageBucketSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetObjectStorageBucketDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageBucketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: GetObjectStorageBucketPathParams;

  @SpeakeasyMetadata()
  security: GetObjectStorageBucketSecurity;
}


export class GetObjectStorageBucketResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  objectStorageBucket?: shared.ObjectStorageBucket;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getObjectStorageBucketDefaultApplicationJsonObject?: GetObjectStorageBucketDefaultApplicationJson;
}
