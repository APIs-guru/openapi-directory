import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Widget } from "./widget";



// Tile
/** 
 * A single tile in the mosaic. The placement and size of the tile are configurable.
**/
export class Tile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=widget" })
  widget?: Widget;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;

  @SpeakeasyMetadata({ data: "json, name=xPos" })
  xPos?: number;

  @SpeakeasyMetadata({ data: "json, name=yPos" })
  yPos?: number;
}
