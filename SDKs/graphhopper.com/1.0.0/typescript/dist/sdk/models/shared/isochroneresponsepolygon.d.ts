import { SpeakeasyBase } from "../../../internal/utils";
import { Polygon } from "./polygon";
export declare class IsochroneResponsePolygonProperties extends SpeakeasyBase {
    bucket?: number;
}
/**
 * A found path
**/
export declare class IsochroneResponsePolygon extends SpeakeasyBase {
    geometry?: Polygon;
    properties?: IsochroneResponsePolygonProperties;
    type?: string;
}
