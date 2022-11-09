import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasTopologyMapsRenderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasTopologyMapsRenderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasTopologyMapsRenderPathParams;
}


export class ExtrasTopologyMapsRenderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  topologyMap?: shared.TopologyMap;
}
