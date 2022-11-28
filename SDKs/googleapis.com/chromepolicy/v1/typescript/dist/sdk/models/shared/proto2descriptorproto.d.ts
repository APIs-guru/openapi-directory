import { SpeakeasyBase } from "../../../internal/utils";
import { Proto2EnumDescriptorProto } from "./proto2enumdescriptorproto";
import { Proto2FieldDescriptorProto } from "./proto2fielddescriptorproto";
import { Proto2OneofDescriptorProto } from "./proto2oneofdescriptorproto";
/**
 * Describes a message type.
**/
export declare class Proto2DescriptorProto extends SpeakeasyBase {
    enumType?: Proto2EnumDescriptorProto[];
    field?: Proto2FieldDescriptorProto[];
    name?: string;
    nestedType?: Proto2DescriptorProto[];
    oneofDecl?: Proto2OneofDescriptorProto[];
}
