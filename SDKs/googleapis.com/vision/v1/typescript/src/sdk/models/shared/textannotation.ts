import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Page } from "./page";



// TextAnnotation
/** 
 * TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
**/
export class TextAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages", elemType: Page })
  pages?: Page[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
