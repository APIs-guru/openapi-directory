import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasTopologyMapsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasTopologyMapsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasTopologyMapsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableTopologyMapInput;
}


export class ExtrasTopologyMapsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  topologyMap?: shared.TopologyMap;
}
