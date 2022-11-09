import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETOBJECTSTORAGECLUSTER_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetObjectStorageClusterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class GetObjectStorageClusterRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: GetObjectStorageClusterPathParams;
}


export class GetObjectStorageClusterDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objectStorageCluster?: shared.ObjectStorageCluster;

  @Metadata()
  statusCode: number;

  @Metadata()
  getObjectStorageClusterDefaultApplicationJsonObject?: GetObjectStorageClusterDefaultApplicationJson;
}
