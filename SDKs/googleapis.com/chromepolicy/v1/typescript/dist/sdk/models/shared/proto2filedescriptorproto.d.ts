import { SpeakeasyBase } from "../../../internal/utils";
import { Proto2EnumDescriptorProto } from "./proto2enumdescriptorproto";
import { Proto2DescriptorProto } from "./proto2descriptorproto";
/**
 * Describes a complete .proto file.
**/
export declare class Proto2FileDescriptorProto extends SpeakeasyBase {
    enumType?: Proto2EnumDescriptorProto[];
    messageType?: Proto2DescriptorProto[];
    name?: string;
    package?: string;
    syntax?: string;
}
