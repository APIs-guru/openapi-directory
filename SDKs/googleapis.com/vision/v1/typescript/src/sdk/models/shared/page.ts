import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Block } from "./block";
import { TextProperty } from "./textproperty";


// Page
/** 
 * Detected page from OCR.
**/
export class Page extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocks", elemType: shared.Block })
  blocks?: Block[];

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=property" })
  property?: TextProperty;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
