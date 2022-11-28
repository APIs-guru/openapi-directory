import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SpriteSheet
/** 
 * Sprite sheet configuration.
**/
export class SpriteSheet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnCount" })
  columnCount?: number;

  @SpeakeasyMetadata({ data: "json, name=endTimeOffset" })
  endTimeOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=filePrefix" })
  filePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: string;

  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality?: number;

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=spriteHeightPixels" })
  spriteHeightPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=spriteWidthPixels" })
  spriteWidthPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
