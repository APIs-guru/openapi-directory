import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridCoordinate } from "./gridcoordinate";



// OverlayPosition
/** 
 * The location an object is overlaid on top of a grid.
**/
export class OverlayPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anchorCell" })
  anchorCell?: GridCoordinate;

  @SpeakeasyMetadata({ data: "json, name=heightPixels" })
  heightPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=offsetXPixels" })
  offsetXPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=offsetYPixels" })
  offsetYPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=widthPixels" })
  widthPixels?: number;
}
