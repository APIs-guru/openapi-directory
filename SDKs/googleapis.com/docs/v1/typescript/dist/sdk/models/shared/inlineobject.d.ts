import { SpeakeasyBase } from "../../../internal/utils";
import { InlineObjectProperties } from "./inlineobjectproperties";
import { SuggestedInlineObjectProperties } from "./suggestedinlineobjectproperties";
/**
 * An object that appears inline with text. An InlineObject contains an EmbeddedObject such as an image.
**/
export declare class InlineObject extends SpeakeasyBase {
    inlineObjectProperties?: InlineObjectProperties;
    objectId?: string;
    suggestedDeletionIds?: string[];
    suggestedInlineObjectPropertiesChanges?: Map<string, SuggestedInlineObjectProperties>;
    suggestedInsertionId?: string;
}
