import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement } from "./structuralelement";
import { StructuralElementInput } from "./structuralelement";



// Header
/** 
 * A document header.
**/
export class Header extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: StructuralElement })
  content?: StructuralElement[];

  @SpeakeasyMetadata({ data: "json, name=headerId" })
  headerId?: string;
}


// HeaderInput
/** 
 * A document header.
**/
export class HeaderInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: StructuralElementInput })
  content?: StructuralElementInput[];

  @SpeakeasyMetadata({ data: "json, name=headerId" })
  headerId?: string;
}
