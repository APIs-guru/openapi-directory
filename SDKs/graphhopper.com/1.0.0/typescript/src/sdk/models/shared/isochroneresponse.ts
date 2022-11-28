import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IsochroneResponsePolygon } from "./isochroneresponsepolygon";



export class IsochroneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyrights" })
  copyrights?: string[];

  @SpeakeasyMetadata({ data: "json, name=polygons", elemType: IsochroneResponsePolygon })
  polygons?: IsochroneResponsePolygon[];
}
