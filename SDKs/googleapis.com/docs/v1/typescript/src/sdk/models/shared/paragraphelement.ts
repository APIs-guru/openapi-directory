import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoText } from "./autotext";
import { ColumnBreak } from "./columnbreak";
import { Equation } from "./equation";
import { FootnoteReference } from "./footnotereference";
import { HorizontalRule } from "./horizontalrule";
import { InlineObjectElement } from "./inlineobjectelement";
import { PageBreak } from "./pagebreak";
import { PersonInput } from "./person";
import { RichLinkInput } from "./richlink";
import { TextRun } from "./textrun";
import { Person } from "./person";
import { RichLink } from "./richlink";



// ParagraphElementInput
/** 
 * A ParagraphElement describes content within a Paragraph.
**/
export class ParagraphElementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoText" })
  autoText?: AutoText;

  @SpeakeasyMetadata({ data: "json, name=columnBreak" })
  columnBreak?: ColumnBreak;

  @SpeakeasyMetadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=equation" })
  equation?: Equation;

  @SpeakeasyMetadata({ data: "json, name=footnoteReference" })
  footnoteReference?: FootnoteReference;

  @SpeakeasyMetadata({ data: "json, name=horizontalRule" })
  horizontalRule?: HorizontalRule;

  @SpeakeasyMetadata({ data: "json, name=inlineObjectElement" })
  inlineObjectElement?: InlineObjectElement;

  @SpeakeasyMetadata({ data: "json, name=pageBreak" })
  pageBreak?: PageBreak;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: PersonInput;

  @SpeakeasyMetadata({ data: "json, name=richLink" })
  richLink?: RichLinkInput;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=textRun" })
  textRun?: TextRun;
}


// ParagraphElement
/** 
 * A ParagraphElement describes content within a Paragraph.
**/
export class ParagraphElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoText" })
  autoText?: AutoText;

  @SpeakeasyMetadata({ data: "json, name=columnBreak" })
  columnBreak?: ColumnBreak;

  @SpeakeasyMetadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=equation" })
  equation?: Equation;

  @SpeakeasyMetadata({ data: "json, name=footnoteReference" })
  footnoteReference?: FootnoteReference;

  @SpeakeasyMetadata({ data: "json, name=horizontalRule" })
  horizontalRule?: HorizontalRule;

  @SpeakeasyMetadata({ data: "json, name=inlineObjectElement" })
  inlineObjectElement?: InlineObjectElement;

  @SpeakeasyMetadata({ data: "json, name=pageBreak" })
  pageBreak?: PageBreak;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: Person;

  @SpeakeasyMetadata({ data: "json, name=richLink" })
  richLink?: RichLink;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=textRun" })
  textRun?: TextRun;
}
