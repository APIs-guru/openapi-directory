import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecondDerivativeElevationGrid
/** 
 * A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs of the diffs between them as integers at some requested level of precision to take advantage of integer packing. Note that the data is packed in such a way that is fast to decode in Unity and that further optimizes wire size.
**/
export class SecondDerivativeElevationGrid extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altitudeMultiplier" })
  altitudeMultiplier?: number;

  @SpeakeasyMetadata({ data: "json, name=columnCount" })
  columnCount?: number;

  @SpeakeasyMetadata({ data: "json, name=encodedData" })
  encodedData?: string;

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: number;
}
