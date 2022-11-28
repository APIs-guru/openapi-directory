import { SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
export declare enum TypePrimitiveEnum {
    PrimitiveUnspecified = "PRIMITIVE_UNSPECIFIED",
    String = "STRING",
    Varies = "VARIES",
    UnescapedString = "UNESCAPED_STRING"
}
/**
 * A type definition for some HL7v2 type (incl. Segments and Datatypes).
**/
export declare class Type extends SpeakeasyBase {
    fields?: Field[];
    name?: string;
    primitive?: TypePrimitiveEnum;
}
