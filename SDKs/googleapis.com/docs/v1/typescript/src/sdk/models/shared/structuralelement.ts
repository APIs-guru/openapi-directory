import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Paragraph } from "./paragraph";
import { SectionBreak } from "./sectionbreak";
import { Table } from "./table";
import { TableOfContents } from "./tableofcontents";


// StructuralElement
/** 
 * A StructuralElement describes content that provides structure to the document.
**/
export class StructuralElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @Metadata({ data: "json, name=paragraph" })
  paragraph?: Paragraph;

  @Metadata({ data: "json, name=sectionBreak" })
  sectionBreak?: SectionBreak;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=table" })
  table?: Table;

  @Metadata({ data: "json, name=tableOfContents" })
  tableOfContents?: TableOfContents;
}
