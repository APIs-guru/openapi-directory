import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETOBJECTSTORAGEBUCKET_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetObjectStorageBucketPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class GetObjectStorageBucketSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetObjectStorageBucketSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetObjectStorageBucketSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetObjectStorageBucketSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetObjectStorageBucketSecurityOption2;
}


export class GetObjectStorageBucketRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: GetObjectStorageBucketPathParams;

  @Metadata()
  security: GetObjectStorageBucketSecurity;
}


export class GetObjectStorageBucketDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageBucketResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objectStorageBucket?: shared.ObjectStorageBucket;

  @Metadata()
  statusCode: number;

  @Metadata()
  getObjectStorageBucketDefaultApplicationJsonObject?: GetObjectStorageBucketDefaultApplicationJson;
}
