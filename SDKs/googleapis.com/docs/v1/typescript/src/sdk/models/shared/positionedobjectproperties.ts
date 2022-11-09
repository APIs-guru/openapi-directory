import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmbeddedObject } from "./embeddedobject";
import { PositionedObjectPositioning } from "./positionedobjectpositioning";


// PositionedObjectProperties
/** 
 * Properties of a PositionedObject.
**/
export class PositionedObjectProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=embeddedObject" })
  embeddedObject?: EmbeddedObject;

  @Metadata({ data: "json, name=positioning" })
  positioning?: PositionedObjectPositioning;
}
