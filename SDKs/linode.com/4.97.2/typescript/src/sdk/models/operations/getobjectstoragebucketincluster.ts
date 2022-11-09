import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETOBJECTSTORAGEBUCKETINCLUSTER_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetObjectStorageBucketinClusterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class GetObjectStorageBucketinClusterSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetObjectStorageBucketinClusterSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetObjectStorageBucketinClusterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetObjectStorageBucketinClusterSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetObjectStorageBucketinClusterSecurityOption2;
}


export class GetObjectStorageBucketinClusterRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: GetObjectStorageBucketinClusterPathParams;

  @Metadata()
  security: GetObjectStorageBucketinClusterSecurity;
}


export class GetObjectStorageBucketinCluster200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ObjectStorageBucket })
  data?: shared.ObjectStorageBucket[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetObjectStorageBucketinClusterDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageBucketinClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getObjectStorageBucketinCluster200ApplicationJsonObject?: GetObjectStorageBucketinCluster200ApplicationJson;

  @Metadata()
  getObjectStorageBucketinClusterDefaultApplicationJsonObject?: GetObjectStorageBucketinClusterDefaultApplicationJson;
}
