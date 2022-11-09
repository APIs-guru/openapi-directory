import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationClustersUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClustersUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationClustersUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableCluster;
}


export class VirtualizationClustersUpdateResponse extends SpeakeasyBase {
  @Metadata()
  cluster?: shared.Cluster;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
