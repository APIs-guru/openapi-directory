import { SpeakeasyBase } from "../../../internal/utils";
import { TileCoordinates } from "./tilecoordinates";
import { FirstDerivativeElevationGrid } from "./firstderivativeelevationgrid";
import { SecondDerivativeElevationGrid } from "./secondderivativeelevationgrid";
/**
 * A tile containing information about the terrain located in the region it covers.
**/
export declare class TerrainTile extends SpeakeasyBase {
    coordinates?: TileCoordinates;
    firstDerivative?: FirstDerivativeElevationGrid;
    name?: string;
    secondDerivative?: SecondDerivativeElevationGrid;
}
