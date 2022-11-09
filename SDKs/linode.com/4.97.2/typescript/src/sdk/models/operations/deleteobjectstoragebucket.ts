import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const DELETEOBJECTSTORAGEBUCKET_SERVERS = [
	"https://api.linode.com/v4",
];



export class DeleteObjectStorageBucketPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class DeleteObjectStorageBucketSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteObjectStorageBucketSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteObjectStorageBucketSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteObjectStorageBucketSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteObjectStorageBucketSecurityOption2;
}


export class DeleteObjectStorageBucketRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: DeleteObjectStorageBucketPathParams;

  @Metadata()
  security: DeleteObjectStorageBucketSecurity;
}


export class DeleteObjectStorageBucketDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteObjectStorageBucketResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteObjectStorageBucket200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteObjectStorageBucketDefaultApplicationJsonObject?: DeleteObjectStorageBucketDefaultApplicationJson;
}
