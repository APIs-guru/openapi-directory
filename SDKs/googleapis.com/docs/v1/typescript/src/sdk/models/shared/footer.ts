import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement } from "./structuralelement";
import { StructuralElementInput } from "./structuralelement";



// Footer
/** 
 * A document footer.
**/
export class Footer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: StructuralElement })
  content?: StructuralElement[];

  @SpeakeasyMetadata({ data: "json, name=footerId" })
  footerId?: string;
}


// FooterInput
/** 
 * A document footer.
**/
export class FooterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: StructuralElementInput })
  content?: StructuralElementInput[];

  @SpeakeasyMetadata({ data: "json, name=footerId" })
  footerId?: string;
}
