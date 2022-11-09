import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationClustersPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClustersPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationClustersPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableCluster;
}


export class VirtualizationClustersPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  cluster?: shared.Cluster;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
