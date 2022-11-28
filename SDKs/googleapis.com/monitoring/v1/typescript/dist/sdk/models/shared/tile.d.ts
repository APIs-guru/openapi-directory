import { SpeakeasyBase } from "../../../internal/utils";
import { Widget } from "./widget";
/**
 * A single tile in the mosaic. The placement and size of the tile are configurable.
**/
export declare class Tile extends SpeakeasyBase {
    height?: number;
    widget?: Widget;
    width?: number;
    xPos?: number;
    yPos?: number;
}
