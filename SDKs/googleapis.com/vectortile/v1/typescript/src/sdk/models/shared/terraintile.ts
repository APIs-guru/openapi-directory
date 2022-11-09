import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TileCoordinates } from "./tilecoordinates";
import { FirstDerivativeElevationGrid } from "./firstderivativeelevationgrid";
import { SecondDerivativeElevationGrid } from "./secondderivativeelevationgrid";


// TerrainTile
/** 
 * A tile containing information about the terrain located in the region it covers.
**/
export class TerrainTile extends SpeakeasyBase {
  @Metadata({ data: "json, name=coordinates" })
  coordinates?: TileCoordinates;

  @Metadata({ data: "json, name=firstDerivative" })
  firstDerivative?: FirstDerivativeElevationGrid;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=secondDerivative" })
  secondDerivative?: SecondDerivativeElevationGrid;
}
