import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualizationClusterTypesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ClusterTypeInput;
}


export class VirtualizationClusterTypesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterType?: shared.ClusterType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
