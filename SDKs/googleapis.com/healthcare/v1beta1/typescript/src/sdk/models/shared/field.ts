import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Field
/** 
 * A (sub) field of a type.
**/
export class Field extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxOccurs" })
  maxOccurs?: number;

  @SpeakeasyMetadata({ data: "json, name=minOccurs" })
  minOccurs?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
