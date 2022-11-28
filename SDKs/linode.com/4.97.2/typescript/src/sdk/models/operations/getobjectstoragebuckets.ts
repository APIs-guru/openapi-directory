import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetObjectStorageBucketsServerList = [
	"https://api.linode.com/v4",
] as const;


export class GetObjectStorageBucketsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetObjectStorageBuckets200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ObjectStorageBucket })
  data?: shared.ObjectStorageBucket[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetObjectStorageBucketsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageBucketsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  security: GetObjectStorageBucketsSecurity;
}


export class GetObjectStorageBucketsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getObjectStorageBuckets200ApplicationJsonObject?: GetObjectStorageBuckets200ApplicationJson;

  @SpeakeasyMetadata()
  getObjectStorageBucketsDefaultApplicationJsonObject?: GetObjectStorageBucketsDefaultApplicationJson;
}
