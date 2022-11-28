import { SpeakeasyBase } from "../../../internal/utils";
import { GridCoordinate } from "./gridcoordinate";
/**
 * The location an object is overlaid on top of a grid.
**/
export declare class OverlayPosition extends SpeakeasyBase {
    anchorCell?: GridCoordinate;
    heightPixels?: number;
    offsetXPixels?: number;
    offsetYPixels?: number;
    widthPixels?: number;
}
