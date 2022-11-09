import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Field } from "./field";

export enum TypePrimitiveEnum {
    PrimitiveUnspecified = "PRIMITIVE_UNSPECIFIED"
,    String = "STRING"
,    Varies = "VARIES"
,    UnescapedString = "UNESCAPED_STRING"
}


// Type
/** 
 * A type definition for some HL7v2 type (incl. Segments and Datatypes).
**/
export class Type extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.Field })
  fields?: Field[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primitive" })
  primitive?: TypePrimitiveEnum;
}
