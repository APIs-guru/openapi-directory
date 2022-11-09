import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IsochroneResponsePolygon } from "./isochroneresponsepolygon";


export class IsochroneResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyrights" })
  copyrights?: string[];

  @Metadata({ data: "json, name=polygons", elemType: shared.IsochroneResponsePolygon })
  polygons?: IsochroneResponsePolygon[];
}
