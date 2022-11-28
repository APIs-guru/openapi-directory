import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";


export enum AutoTextTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    PageNumber = "PAGE_NUMBER",
    PageCount = "PAGE_COUNT"
}


// AutoText
/** 
 * A ParagraphElement representing a spot in the text that's dynamically replaced with content that can change over time, like a page number.
**/
export class AutoText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedTextStyleChanges", elemType: SuggestedTextStyle })
  suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AutoTextTypeEnum;
}
