import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetObjectStorageBucketinClusterServerList = [
	"https://api.linode.com/v4",
] as const;


export class GetObjectStorageBucketinClusterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class GetObjectStorageBucketinClusterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetObjectStorageBucketinCluster200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ObjectStorageBucket })
  data?: shared.ObjectStorageBucket[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetObjectStorageBucketinClusterDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageBucketinClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: GetObjectStorageBucketinClusterPathParams;

  @SpeakeasyMetadata()
  security: GetObjectStorageBucketinClusterSecurity;
}


export class GetObjectStorageBucketinClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getObjectStorageBucketinCluster200ApplicationJsonObject?: GetObjectStorageBucketinCluster200ApplicationJson;

  @SpeakeasyMetadata()
  getObjectStorageBucketinClusterDefaultApplicationJsonObject?: GetObjectStorageBucketinClusterDefaultApplicationJson;
}
