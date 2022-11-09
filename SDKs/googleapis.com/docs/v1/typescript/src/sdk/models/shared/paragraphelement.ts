import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoText } from "./autotext";
import { ColumnBreak } from "./columnbreak";
import { Equation } from "./equation";
import { FootnoteReference } from "./footnotereference";
import { HorizontalRule } from "./horizontalrule";
import { InlineObjectElement } from "./inlineobjectelement";
import { PageBreak } from "./pagebreak";
import { Person } from "./person";
import { RichLink } from "./richlink";
import { TextRun } from "./textrun";


// ParagraphElement
/** 
 * A ParagraphElement describes content within a Paragraph.
**/
export class ParagraphElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoText" })
  autoText?: AutoText;

  @Metadata({ data: "json, name=columnBreak" })
  columnBreak?: ColumnBreak;

  @Metadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @Metadata({ data: "json, name=equation" })
  equation?: Equation;

  @Metadata({ data: "json, name=footnoteReference" })
  footnoteReference?: FootnoteReference;

  @Metadata({ data: "json, name=horizontalRule" })
  horizontalRule?: HorizontalRule;

  @Metadata({ data: "json, name=inlineObjectElement" })
  inlineObjectElement?: InlineObjectElement;

  @Metadata({ data: "json, name=pageBreak" })
  pageBreak?: PageBreak;

  @Metadata({ data: "json, name=person" })
  person?: Person;

  @Metadata({ data: "json, name=richLink" })
  richLink?: RichLink;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=textRun" })
  textRun?: TextRun;
}
