import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LabelDescriptorValueTypeEnum {
    String = "STRING",
    Bool = "BOOL",
    Int64 = "INT64"
}
/**
 * A description of a label.
**/
export declare class LabelDescriptor extends SpeakeasyBase {
    description?: string;
    key?: string;
    valueType?: LabelDescriptorValueTypeEnum;
}
