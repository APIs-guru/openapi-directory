import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualizationClusterGroupsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClusterGroupsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualizationClusterGroupsPartialUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ClusterGroupInput;
}


export class VirtualizationClusterGroupsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterGroup?: shared.ClusterGroup;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
