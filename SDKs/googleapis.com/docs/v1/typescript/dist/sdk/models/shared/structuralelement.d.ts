import { SpeakeasyBase } from "../../../internal/utils";
import { ParagraphInput } from "./paragraph";
import { SectionBreak } from "./sectionbreak";
import { Table } from "./table";
import { TableOfContents } from "./tableofcontents";
import { Paragraph } from "./paragraph";
/**
 * A StructuralElement describes content that provides structure to the document.
**/
export declare class StructuralElementInput extends SpeakeasyBase {
    endIndex?: number;
    paragraph?: ParagraphInput;
    sectionBreak?: SectionBreak;
    startIndex?: number;
    table?: Table;
    tableOfContents?: TableOfContents;
}
/**
 * A StructuralElement describes content that provides structure to the document.
**/
export declare class StructuralElement extends SpeakeasyBase {
    endIndex?: number;
    paragraph?: Paragraph;
    sectionBreak?: SectionBreak;
    startIndex?: number;
    table?: Table;
    tableOfContents?: TableOfContents;
}
