import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationClustersCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableCluster;
}


export class VirtualizationClustersCreateResponse extends SpeakeasyBase {
  @Metadata()
  cluster?: shared.Cluster;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
