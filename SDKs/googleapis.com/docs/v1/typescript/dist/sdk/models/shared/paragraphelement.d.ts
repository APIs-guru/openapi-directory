import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * A ParagraphElement describes content within a Paragraph.
**/
export declare class ParagraphElementInput extends SpeakeasyBase {
    autoText?: AutoText;
    columnBreak?: ColumnBreak;
    endIndex?: number;
    equation?: Equation;
    footnoteReference?: FootnoteReference;
    horizontalRule?: HorizontalRule;
    inlineObjectElement?: InlineObjectElement;
    pageBreak?: PageBreak;
    person?: PersonInput;
    richLink?: RichLinkInput;
    startIndex?: number;
    textRun?: TextRun;
}
/**
 * A ParagraphElement describes content within a Paragraph.
**/
export declare class ParagraphElement extends SpeakeasyBase {
    autoText?: AutoText;
    columnBreak?: ColumnBreak;
    endIndex?: number;
    equation?: Equation;
    footnoteReference?: FootnoteReference;
    horizontalRule?: HorizontalRule;
    inlineObjectElement?: InlineObjectElement;
    pageBreak?: PageBreak;
    person?: Person;
    richLink?: RichLink;
    startIndex?: number;
    textRun?: TextRun;
}
