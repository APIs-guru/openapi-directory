import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETOBJECTSTORAGECLUSTERS_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetObjectStorageClustersRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;
}


export class GetObjectStorageClusters200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ObjectStorageCluster })
  data?: shared.ObjectStorageCluster[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetObjectStorageClustersDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageClustersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getObjectStorageClusters200ApplicationJsonObject?: GetObjectStorageClusters200ApplicationJson;

  @Metadata()
  getObjectStorageClustersDefaultApplicationJsonObject?: GetObjectStorageClustersDefaultApplicationJson;
}
