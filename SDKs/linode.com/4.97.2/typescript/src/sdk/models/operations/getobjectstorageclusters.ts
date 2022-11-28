import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetObjectStorageClustersServerList = [
	"https://api.linode.com/v4",
] as const;


export class GetObjectStorageClusters200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ObjectStorageCluster })
  data?: shared.ObjectStorageCluster[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetObjectStorageClustersDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageClustersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;
}


export class GetObjectStorageClustersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getObjectStorageClusters200ApplicationJsonObject?: GetObjectStorageClusters200ApplicationJson;

  @SpeakeasyMetadata()
  getObjectStorageClustersDefaultApplicationJsonObject?: GetObjectStorageClustersDefaultApplicationJson;
}
