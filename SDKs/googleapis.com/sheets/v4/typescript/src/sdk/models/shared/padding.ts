import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Padding
/** 
 * The amount of padding around the cell, in pixels. When updating padding, every field must be specified.
**/
export class Padding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bottom" })
  bottom?: number;

  @SpeakeasyMetadata({ data: "json, name=left" })
  left?: number;

  @SpeakeasyMetadata({ data: "json, name=right" })
  right?: number;

  @SpeakeasyMetadata({ data: "json, name=top" })
  top?: number;
}
