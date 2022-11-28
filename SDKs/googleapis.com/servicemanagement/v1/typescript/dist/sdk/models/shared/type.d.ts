import { SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
import { Option } from "./option";
import { SourceContext } from "./sourcecontext";
export declare enum TypeSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2",
    SyntaxProto3 = "SYNTAX_PROTO3"
}
/**
 * A protocol buffer message type.
**/
export declare class Type extends SpeakeasyBase {
    fields?: Field[];
    name?: string;
    oneofs?: string[];
    options?: Option[];
    sourceContext?: SourceContext;
    syntax?: TypeSyntaxEnum;
}
