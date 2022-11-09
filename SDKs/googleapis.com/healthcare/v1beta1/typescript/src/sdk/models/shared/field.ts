import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Field
/** 
 * A (sub) field of a type.
**/
export class Field extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxOccurs" })
  maxOccurs?: number;

  @Metadata({ data: "json, name=minOccurs" })
  minOccurs?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=table" })
  table?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
