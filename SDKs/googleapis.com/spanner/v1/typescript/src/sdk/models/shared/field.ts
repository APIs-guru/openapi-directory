import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Type } from "./type";


// Field
/** 
 * Message representing a single field of a struct.
**/
export class Field extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: Type;
}
