import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObject } from "./embeddedobject";



// InlineObjectProperties
/** 
 * Properties of an InlineObject.
**/
export class InlineObjectProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=embeddedObject" })
  embeddedObject?: EmbeddedObject;
}
