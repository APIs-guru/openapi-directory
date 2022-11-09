import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StructuralElement } from "./structuralelement";


// Header
/** 
 * A document header.
**/
export class Header extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.StructuralElement })
  content?: StructuralElement[];

  @Metadata({ data: "json, name=headerId" })
  headerId?: string;
}
