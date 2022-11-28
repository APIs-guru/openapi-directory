import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasTopologyMapsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasTopologyMapsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasTopologyMapsReadPathParams;
}


export class ExtrasTopologyMapsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  topologyMap?: shared.TopologyMap;
}
