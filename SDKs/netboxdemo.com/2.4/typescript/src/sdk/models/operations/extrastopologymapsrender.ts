import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasTopologyMapsRenderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasTopologyMapsRenderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasTopologyMapsRenderPathParams;
}


export class ExtrasTopologyMapsRenderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  topologyMap?: shared.TopologyMap;
}
