import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";



// ColumnBreak
/** 
 * A ParagraphElement representing a column break. A column break makes the subsequent text start at the top of the next column.
**/
export class ColumnBreak extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedTextStyleChanges", elemType: SuggestedTextStyle })
  suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
