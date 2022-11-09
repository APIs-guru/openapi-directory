import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tile } from "./tile";


// MosaicLayout
/** 
 * A mosaic layout divides the available space into a grid of blocks, and overlays the grid with tiles. Unlike GridLayout, tiles may span multiple grid blocks and can be placed at arbitrary locations in the grid.
**/
export class MosaicLayout extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: number;

  @Metadata({ data: "json, name=tiles", elemType: shared.Tile })
  tiles?: Tile[];
}
