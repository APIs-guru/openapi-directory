import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructuralElementInput } from "./structuralelement";
import { StructuralElement } from "./structuralelement";



// FootnoteInput
/** 
 * A document footnote.
**/
export class FootnoteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: StructuralElementInput })
  content?: StructuralElementInput[];

  @SpeakeasyMetadata({ data: "json, name=footnoteId" })
  footnoteId?: string;
}


// Footnote
/** 
 * A document footnote.
**/
export class Footnote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: StructuralElement })
  content?: StructuralElement[];

  @SpeakeasyMetadata({ data: "json, name=footnoteId" })
  footnoteId?: string;
}
