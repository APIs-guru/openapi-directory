import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";



// Size
/** 
 * A width and height.
**/
export class Size extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: Dimension;
}
