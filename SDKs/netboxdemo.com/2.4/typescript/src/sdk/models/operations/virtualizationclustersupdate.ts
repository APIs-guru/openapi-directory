import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualizationClustersUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClustersUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualizationClustersUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableClusterInput;
}


export class VirtualizationClustersUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: shared.Cluster;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
