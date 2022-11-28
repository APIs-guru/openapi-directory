import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DataTypeFieldFormatEnum {
    Integer = "integer",
    FloatPoint = "floatPoint",
    String = "string",
    Map = "map",
    IntegerList = "integerList",
    FloatList = "floatList",
    Blob = "blob"
}
/**
 * In case of multi-dimensional data (such as an accelerometer with x, y, and z axes) each field represents one dimension. Each data type field has a unique name which identifies it. The field also defines the format of the data (int, float, etc.). This message is only instantiated in code and not used for wire comms or stored in any way.
**/
export declare class DataTypeField extends SpeakeasyBase {
    format?: DataTypeFieldFormatEnum;
    name?: string;
    optional?: boolean;
}
