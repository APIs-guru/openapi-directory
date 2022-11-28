import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualizationClusterGroupsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ClusterGroupInput;
}


export class VirtualizationClusterGroupsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterGroup?: shared.ClusterGroup;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
