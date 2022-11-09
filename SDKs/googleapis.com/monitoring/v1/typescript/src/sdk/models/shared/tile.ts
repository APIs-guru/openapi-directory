import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Widget } from "./widget";


// Tile
/** 
 * A single tile in the mosaic. The placement and size of the tile are configurable.
**/
export class Tile extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=widget" })
  widget?: Widget;

  @Metadata({ data: "json, name=width" })
  width?: number;

  @Metadata({ data: "json, name=xPos" })
  xPos?: number;

  @Metadata({ data: "json, name=yPos" })
  yPos?: number;
}
