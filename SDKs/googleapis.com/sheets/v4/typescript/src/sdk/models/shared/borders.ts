import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Border } from "./border";
import { Border } from "./border";
import { Border } from "./border";
import { Border } from "./border";


// Borders
/** 
 * The borders of the cell.
**/
export class Borders extends SpeakeasyBase {
  @Metadata({ data: "json, name=bottom" })
  bottom?: Border;

  @Metadata({ data: "json, name=left" })
  left?: Border;

  @Metadata({ data: "json, name=right" })
  right?: Border;

  @Metadata({ data: "json, name=top" })
  top?: Border;
}
