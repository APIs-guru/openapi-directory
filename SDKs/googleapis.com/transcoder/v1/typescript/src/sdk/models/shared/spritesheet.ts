import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SpriteSheet
/** 
 * Sprite sheet configuration.
**/
export class SpriteSheet extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnCount" })
  columnCount?: number;

  @Metadata({ data: "json, name=endTimeOffset" })
  endTimeOffset?: string;

  @Metadata({ data: "json, name=filePrefix" })
  filePrefix?: string;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=interval" })
  interval?: string;

  @Metadata({ data: "json, name=quality" })
  quality?: number;

  @Metadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @Metadata({ data: "json, name=spriteHeightPixels" })
  spriteHeightPixels?: number;

  @Metadata({ data: "json, name=spriteWidthPixels" })
  spriteWidthPixels?: number;

  @Metadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
