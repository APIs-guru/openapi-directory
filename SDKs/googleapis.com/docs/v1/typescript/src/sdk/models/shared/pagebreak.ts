import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";


// PageBreak
/** 
 * A ParagraphElement representing a page break. A page break makes the subsequent text start at the top of the next page.
**/
export class PageBreak extends SpeakeasyBase {
  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @Metadata({ data: "json, name=suggestedTextStyleChanges", elemType: shared.SuggestedTextStyle })
  suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;

  @Metadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
