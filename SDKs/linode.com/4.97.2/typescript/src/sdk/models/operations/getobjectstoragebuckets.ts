import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETOBJECTSTORAGEBUCKETS_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetObjectStorageBucketsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetObjectStorageBucketsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetObjectStorageBucketsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetObjectStorageBucketsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetObjectStorageBucketsSecurityOption2;
}


export class GetObjectStorageBucketsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  security: GetObjectStorageBucketsSecurity;
}


export class GetObjectStorageBuckets200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ObjectStorageBucket })
  data?: shared.ObjectStorageBucket[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetObjectStorageBucketsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageBucketsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getObjectStorageBuckets200ApplicationJsonObject?: GetObjectStorageBuckets200ApplicationJson;

  @Metadata()
  getObjectStorageBucketsDefaultApplicationJsonObject?: GetObjectStorageBucketsDefaultApplicationJson;
}
