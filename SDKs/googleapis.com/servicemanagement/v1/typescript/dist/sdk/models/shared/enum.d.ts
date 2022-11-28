import { SpeakeasyBase } from "../../../internal/utils";
import { EnumValue } from "./enumvalue";
import { Option } from "./option";
import { SourceContext } from "./sourcecontext";
export declare enum EnumSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2",
    SyntaxProto3 = "SYNTAX_PROTO3"
}
/**
 * Enum type definition.
**/
export declare class Enum extends SpeakeasyBase {
    enumvalue?: EnumValue[];
    name?: string;
    options?: Option[];
    sourceContext?: SourceContext;
    syntax?: EnumSyntaxEnum;
}
