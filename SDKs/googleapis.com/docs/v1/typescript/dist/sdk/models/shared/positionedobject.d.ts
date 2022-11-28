import { SpeakeasyBase } from "../../../internal/utils";
import { PositionedObjectProperties } from "./positionedobjectproperties";
import { SuggestedPositionedObjectProperties } from "./suggestedpositionedobjectproperties";
/**
 * An object that's tethered to a Paragraph and positioned relative to the beginning of the paragraph. A PositionedObject contains an EmbeddedObject such as an image.
**/
export declare class PositionedObject extends SpeakeasyBase {
    objectId?: string;
    positionedObjectProperties?: PositionedObjectProperties;
    suggestedDeletionIds?: string[];
    suggestedInsertionId?: string;
    suggestedPositionedObjectPropertiesChanges?: Map<string, SuggestedPositionedObjectProperties>;
}
