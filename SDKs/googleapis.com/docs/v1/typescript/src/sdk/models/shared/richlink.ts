import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";
import { RichLinkProperties } from "./richlinkproperties";



// RichLinkInput
/** 
 * A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).
**/
export class RichLinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedTextStyleChanges", elemType: SuggestedTextStyle })
  suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}


// RichLink
/** 
 * A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).
**/
export class RichLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=richLinkId" })
  richLinkId?: string;

  @SpeakeasyMetadata({ data: "json, name=richLinkProperties" })
  richLinkProperties?: RichLinkProperties;

  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedTextStyleChanges", elemType: SuggestedTextStyle })
  suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
