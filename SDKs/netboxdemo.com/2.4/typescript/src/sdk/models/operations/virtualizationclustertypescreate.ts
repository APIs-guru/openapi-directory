import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationClusterTypesCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClusterType;
}


export class VirtualizationClusterTypesCreateResponse extends SpeakeasyBase {
  @Metadata()
  clusterType?: shared.ClusterType;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
