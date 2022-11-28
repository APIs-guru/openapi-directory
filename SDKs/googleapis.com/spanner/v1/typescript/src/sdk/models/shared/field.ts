import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";



// Field
/** 
 * Message representing a single field of a struct.
**/
export class Field extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Type;
}
