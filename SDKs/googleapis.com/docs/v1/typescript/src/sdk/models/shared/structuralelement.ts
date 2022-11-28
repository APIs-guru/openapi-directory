import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParagraphInput } from "./paragraph";
import { SectionBreak } from "./sectionbreak";
import { Table } from "./table";
import { TableOfContents } from "./tableofcontents";
import { Paragraph } from "./paragraph";



// StructuralElementInput
/** 
 * A StructuralElement describes content that provides structure to the document.
**/
export class StructuralElementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=paragraph" })
  paragraph?: ParagraphInput;

  @SpeakeasyMetadata({ data: "json, name=sectionBreak" })
  sectionBreak?: SectionBreak;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: Table;

  @SpeakeasyMetadata({ data: "json, name=tableOfContents" })
  tableOfContents?: TableOfContents;
}


// StructuralElement
/** 
 * A StructuralElement describes content that provides structure to the document.
**/
export class StructuralElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=paragraph" })
  paragraph?: Paragraph;

  @SpeakeasyMetadata({ data: "json, name=sectionBreak" })
  sectionBreak?: SectionBreak;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: Table;

  @SpeakeasyMetadata({ data: "json, name=tableOfContents" })
  tableOfContents?: TableOfContents;
}
