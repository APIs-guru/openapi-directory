import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";


export enum TypePrimitiveEnum {
    PrimitiveUnspecified = "PRIMITIVE_UNSPECIFIED",
    String = "STRING",
    Varies = "VARIES",
    UnescapedString = "UNESCAPED_STRING"
}


// Type
/** 
 * A type definition for some HL7v2 type (incl. Segments and Datatypes).
**/
export class Type extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: Field })
  fields?: Field[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primitive" })
  primitive?: TypePrimitiveEnum;
}
