import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PositionedObjectProperties } from "./positionedobjectproperties";
import { SuggestedPositionedObjectProperties } from "./suggestedpositionedobjectproperties";



// PositionedObject
/** 
 * An object that's tethered to a Paragraph and positioned relative to the beginning of the paragraph. A PositionedObject contains an EmbeddedObject such as an image.
**/
export class PositionedObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=positionedObjectProperties" })
  positionedObjectProperties?: PositionedObjectProperties;

  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionId" })
  suggestedInsertionId?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestedPositionedObjectPropertiesChanges", elemType: SuggestedPositionedObjectProperties })
  suggestedPositionedObjectPropertiesChanges?: Map<string, SuggestedPositionedObjectProperties>;
}
