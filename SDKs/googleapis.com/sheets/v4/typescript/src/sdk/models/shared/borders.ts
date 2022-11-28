import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Border } from "./border";



// Borders
/** 
 * The borders of the cell.
**/
export class Borders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bottom" })
  bottom?: Border;

  @SpeakeasyMetadata({ data: "json, name=left" })
  left?: Border;

  @SpeakeasyMetadata({ data: "json, name=right" })
  right?: Border;

  @SpeakeasyMetadata({ data: "json, name=top" })
  top?: Border;
}
