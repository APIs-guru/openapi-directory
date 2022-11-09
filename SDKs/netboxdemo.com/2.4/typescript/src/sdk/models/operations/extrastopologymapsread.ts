import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasTopologyMapsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasTopologyMapsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasTopologyMapsReadPathParams;
}


export class ExtrasTopologyMapsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  topologyMap?: shared.TopologyMap;
}
