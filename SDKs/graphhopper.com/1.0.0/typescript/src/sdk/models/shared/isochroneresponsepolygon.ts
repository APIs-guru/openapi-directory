import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Polygon } from "./polygon";


export class IsochroneResponsePolygonProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: number;
}


// IsochroneResponsePolygon
/** 
 * A found path
**/
export class IsochroneResponsePolygon extends SpeakeasyBase {
  @Metadata({ data: "json, name=geometry" })
  geometry?: Polygon;

  @Metadata({ data: "json, name=properties" })
  properties?: IsochroneResponsePolygonProperties;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
