import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";

export enum AutoTextTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    PageNumber = "PAGE_NUMBER"
,    PageCount = "PAGE_COUNT"
}


// AutoText
/** 
 * A ParagraphElement representing a spot in the text that's dynamically replaced with content that can change over time, like a page number.
**/
export class AutoText extends SpeakeasyBase {
  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @Metadata({ data: "json, name=suggestedTextStyleChanges", elemType: shared.SuggestedTextStyle })
  suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;

  @Metadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;

  @Metadata({ data: "json, name=type" })
  type?: AutoTextTypeEnum;
}
