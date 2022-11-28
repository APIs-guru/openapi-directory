import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tile } from "./tile";



// MosaicLayout
/** 
 * A mosaic layout divides the available space into a grid of blocks, and overlays the grid with tiles. Unlike GridLayout, tiles may span multiple grid blocks and can be placed at arbitrary locations in the grid.
**/
export class MosaicLayout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: number;

  @SpeakeasyMetadata({ data: "json, name=tiles", elemType: Tile })
  tiles?: Tile[];
}
