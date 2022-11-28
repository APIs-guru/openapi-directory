import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Border } from "./border";
import { GridRange } from "./gridrange";



// UpdateBordersRequest
/** 
 * Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE.
**/
export class UpdateBordersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bottom" })
  bottom?: Border;

  @SpeakeasyMetadata({ data: "json, name=innerHorizontal" })
  innerHorizontal?: Border;

  @SpeakeasyMetadata({ data: "json, name=innerVertical" })
  innerVertical?: Border;

  @SpeakeasyMetadata({ data: "json, name=left" })
  left?: Border;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=right" })
  right?: Border;

  @SpeakeasyMetadata({ data: "json, name=top" })
  top?: Border;
}
