import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TileCoordinates } from "./tilecoordinates";
import { FirstDerivativeElevationGrid } from "./firstderivativeelevationgrid";
import { SecondDerivativeElevationGrid } from "./secondderivativeelevationgrid";



// TerrainTile
/** 
 * A tile containing information about the terrain located in the region it covers.
**/
export class TerrainTile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coordinates" })
  coordinates?: TileCoordinates;

  @SpeakeasyMetadata({ data: "json, name=firstDerivative" })
  firstDerivative?: FirstDerivativeElevationGrid;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=secondDerivative" })
  secondDerivative?: SecondDerivativeElevationGrid;
}
