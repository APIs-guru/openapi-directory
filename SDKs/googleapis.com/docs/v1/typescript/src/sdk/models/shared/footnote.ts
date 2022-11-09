import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StructuralElement } from "./structuralelement";


// Footnote
/** 
 * A document footnote.
**/
export class Footnote extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.StructuralElement })
  content?: StructuralElement[];

  @Metadata({ data: "json, name=footnoteId" })
  footnoteId?: string;
}
