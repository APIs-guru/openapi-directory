import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualizationClusterGroupsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClusterGroupsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualizationClusterGroupsReadPathParams;
}


export class VirtualizationClusterGroupsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterGroup?: shared.ClusterGroup;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
