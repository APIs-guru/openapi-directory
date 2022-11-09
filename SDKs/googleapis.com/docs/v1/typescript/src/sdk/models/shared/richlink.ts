import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RichLinkProperties } from "./richlinkproperties";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";


// RichLink
/** 
 * A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).
**/
export class RichLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=richLinkId" })
  richLinkId?: string;

  @Metadata({ data: "json, name=richLinkProperties" })
  richLinkProperties?: RichLinkProperties;

  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @Metadata({ data: "json, name=suggestedTextStyleChanges", elemType: shared.SuggestedTextStyle })
  suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;

  @Metadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
