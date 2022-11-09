import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Border } from "./border";
import { Border } from "./border";
import { Border } from "./border";
import { Border } from "./border";
import { GridRange } from "./gridrange";
import { Border } from "./border";
import { Border } from "./border";


// UpdateBordersRequest
/** 
 * Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE.
**/
export class UpdateBordersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bottom" })
  bottom?: Border;

  @Metadata({ data: "json, name=innerHorizontal" })
  innerHorizontal?: Border;

  @Metadata({ data: "json, name=innerVertical" })
  innerVertical?: Border;

  @Metadata({ data: "json, name=left" })
  left?: Border;

  @Metadata({ data: "json, name=range" })
  range?: GridRange;

  @Metadata({ data: "json, name=right" })
  right?: Border;

  @Metadata({ data: "json, name=top" })
  top?: Border;
}
