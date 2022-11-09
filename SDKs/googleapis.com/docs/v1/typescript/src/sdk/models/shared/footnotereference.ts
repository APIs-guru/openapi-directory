import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";


// FootnoteReference
/** 
 * A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote.
**/
export class FootnoteReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=footnoteId" })
  footnoteId?: string;

  @Metadata({ data: "json, name=footnoteNumber" })
  footnoteNumber?: string;

  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @Metadata({ data: "json, name=suggestedTextStyleChanges", elemType: shared.SuggestedTextStyle })
  suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;

  @Metadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
