import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasTopologyMapsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasTopologyMapsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasTopologyMapsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableTopologyMap;
}


export class ExtrasTopologyMapsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  topologyMap?: shared.TopologyMap;
}
