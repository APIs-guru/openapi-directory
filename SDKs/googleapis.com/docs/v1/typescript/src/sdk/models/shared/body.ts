import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructuralElementInput } from "./structuralelement";
import { StructuralElement } from "./structuralelement";



// BodyInput
/** 
 * The document body. The body typically contains the full document contents except for headers, footers, and footnotes.
**/
export class BodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: StructuralElementInput })
  content?: StructuralElementInput[];
}


// Body
/** 
 * The document body. The body typically contains the full document contents except for headers, footers, and footnotes.
**/
export class Body extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: StructuralElement })
  content?: StructuralElement[];
}
