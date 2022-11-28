import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObject } from "./embeddedobject";
import { PositionedObjectPositioning } from "./positionedobjectpositioning";



// PositionedObjectProperties
/** 
 * Properties of a PositionedObject.
**/
export class PositionedObjectProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=embeddedObject" })
  embeddedObject?: EmbeddedObject;

  @SpeakeasyMetadata({ data: "json, name=positioning" })
  positioning?: PositionedObjectPositioning;
}
