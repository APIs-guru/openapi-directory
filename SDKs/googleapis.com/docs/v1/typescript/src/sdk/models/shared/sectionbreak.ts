import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SectionStyle } from "./sectionstyle";


// SectionBreak
/** 
 * A StructuralElement representing a section break. A section is a range of content that has the same SectionStyle. A section break represents the start of a new section, and the section style applies to the section after the section break. The document body always begins with a section break.
**/
export class SectionBreak extends SpeakeasyBase {
  @Metadata({ data: "json, name=sectionStyle" })
  sectionStyle?: SectionStyle;

  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];
}
