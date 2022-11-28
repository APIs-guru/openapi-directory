import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasTopologyMapsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasTopologyMapsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasTopologyMapsPartialUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableTopologyMapInput;
}


export class ExtrasTopologyMapsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  topologyMap?: shared.TopologyMap;
}
