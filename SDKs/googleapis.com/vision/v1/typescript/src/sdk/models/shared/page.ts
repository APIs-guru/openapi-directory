import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Block } from "./block";
import { TextProperty } from "./textproperty";



// Page
/** 
 * Detected page from OCR.
**/
export class Page extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocks", elemType: Block })
  blocks?: Block[];

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: TextProperty;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
