import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationClusterGroupsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClusterGroupsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationClusterGroupsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClusterGroup;
}


export class VirtualizationClusterGroupsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  clusterGroup?: shared.ClusterGroup;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
