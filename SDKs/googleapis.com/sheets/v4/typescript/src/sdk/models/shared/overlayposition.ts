import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridCoordinate } from "./gridcoordinate";


// OverlayPosition
/** 
 * The location an object is overlaid on top of a grid.
**/
export class OverlayPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=anchorCell" })
  anchorCell?: GridCoordinate;

  @Metadata({ data: "json, name=heightPixels" })
  heightPixels?: number;

  @Metadata({ data: "json, name=offsetXPixels" })
  offsetXPixels?: number;

  @Metadata({ data: "json, name=offsetYPixels" })
  offsetYPixels?: number;

  @Metadata({ data: "json, name=widthPixels" })
  widthPixels?: number;
}
