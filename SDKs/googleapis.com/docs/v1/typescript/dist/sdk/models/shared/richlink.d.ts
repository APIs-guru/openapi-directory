import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";
import { RichLinkProperties } from "./richlinkproperties";
/**
 * A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).
**/
export declare class RichLinkInput extends SpeakeasyBase {
    suggestedDeletionIds?: string[];
    suggestedInsertionIds?: string[];
    suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;
    textStyle?: TextStyle;
}
/**
 * A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).
**/
export declare class RichLink extends SpeakeasyBase {
    richLinkId?: string;
    richLinkProperties?: RichLinkProperties;
    suggestedDeletionIds?: string[];
    suggestedInsertionIds?: string[];
    suggestedTextStyleChanges?: Map<string, SuggestedTextStyle>;
    textStyle?: TextStyle;
}
