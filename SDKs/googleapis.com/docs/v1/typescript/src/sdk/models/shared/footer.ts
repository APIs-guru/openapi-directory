import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StructuralElement } from "./structuralelement";


// Footer
/** 
 * A document footer.
**/
export class Footer extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.StructuralElement })
  content?: StructuralElement[];

  @Metadata({ data: "json, name=footerId" })
  footerId?: string;
}
