import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";



// PageBreak
/** 
 * A ParagraphElement representing a page break. A page break makes the subsequent text start at the top of the next page.
**/
export class PageBreak extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedTextStyleChanges", elemType: SuggestedTextStyle })
  suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
