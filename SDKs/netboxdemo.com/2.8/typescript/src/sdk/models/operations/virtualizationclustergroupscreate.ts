import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationClusterGroupsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClusterGroup;
}


export class VirtualizationClusterGroupsCreateResponse extends SpeakeasyBase {
  @Metadata()
  clusterGroup?: shared.ClusterGroup;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
