import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Page } from "./page";


// TextAnnotation
/** 
 * TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
**/
export class TextAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages", elemType: shared.Page })
  pages?: Page[];

  @Metadata({ data: "json, name=text" })
  text?: string;
}
