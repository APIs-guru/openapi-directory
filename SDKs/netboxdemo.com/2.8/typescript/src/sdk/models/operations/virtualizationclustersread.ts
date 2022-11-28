import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualizationClustersReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClustersReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualizationClustersReadPathParams;
}


export class VirtualizationClustersReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: shared.Cluster;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
