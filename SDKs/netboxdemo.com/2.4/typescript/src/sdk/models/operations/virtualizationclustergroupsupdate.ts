import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationClusterGroupsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClusterGroupsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationClusterGroupsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClusterGroup;
}


export class VirtualizationClusterGroupsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  clusterGroup?: shared.ClusterGroup;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
