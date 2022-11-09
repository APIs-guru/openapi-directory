import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmbeddedObject } from "./embeddedobject";


// InlineObjectProperties
/** 
 * Properties of an InlineObject.
**/
export class InlineObjectProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=embeddedObject" })
  embeddedObject?: EmbeddedObject;
}
