import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Padding
/** 
 * The amount of padding around the cell, in pixels. When updating padding, every field must be specified.
**/
export class Padding extends SpeakeasyBase {
  @Metadata({ data: "json, name=bottom" })
  bottom?: number;

  @Metadata({ data: "json, name=left" })
  left?: number;

  @Metadata({ data: "json, name=right" })
  right?: number;

  @Metadata({ data: "json, name=top" })
  top?: number;
}
