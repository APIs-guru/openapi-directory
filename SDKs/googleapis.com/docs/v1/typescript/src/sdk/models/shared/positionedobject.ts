import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PositionedObjectProperties } from "./positionedobjectproperties";
import { SuggestedPositionedObjectProperties } from "./suggestedpositionedobjectproperties";


// PositionedObject
/** 
 * An object that's tethered to a Paragraph and positioned relative to the beginning of the paragraph. A PositionedObject contains an EmbeddedObject such as an image.
**/
export class PositionedObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=positionedObjectProperties" })
  positionedObjectProperties?: PositionedObjectProperties;

  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInsertionId" })
  suggestedInsertionId?: string;

  @Metadata({ data: "json, name=suggestedPositionedObjectPropertiesChanges", elemType: shared.SuggestedPositionedObjectProperties })
  suggestedPositionedObjectPropertiesChanges?: Map<string, SuggestedPositionedObjectProperties>;
}
