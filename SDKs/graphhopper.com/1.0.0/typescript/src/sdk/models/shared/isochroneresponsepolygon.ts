import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Polygon } from "./polygon";



export class IsochroneResponsePolygonProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: number;
}


// IsochroneResponsePolygon
/** 
 * A found path
**/
export class IsochroneResponsePolygon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=geometry" })
  geometry?: Polygon;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: IsochroneResponsePolygonProperties;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
