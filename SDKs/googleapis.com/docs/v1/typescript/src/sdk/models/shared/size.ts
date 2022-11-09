import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";


// Size
/** 
 * A width and height.
**/
export class Size extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: Dimension;

  @Metadata({ data: "json, name=width" })
  width?: Dimension;
}
