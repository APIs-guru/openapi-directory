import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";



// FootnoteReference
/** 
 * A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote.
**/
export class FootnoteReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=footnoteId" })
  footnoteId?: string;

  @SpeakeasyMetadata({ data: "json, name=footnoteNumber" })
  footnoteNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedTextStyleChanges", elemType: SuggestedTextStyle })
  suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
