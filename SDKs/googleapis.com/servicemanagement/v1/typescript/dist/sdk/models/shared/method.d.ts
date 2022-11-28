import { SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";
export declare enum MethodSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2",
    SyntaxProto3 = "SYNTAX_PROTO3"
}
/**
 * Method represents a method of an API interface.
**/
export declare class Method extends SpeakeasyBase {
    name?: string;
    options?: Option[];
    requestStreaming?: boolean;
    requestTypeUrl?: string;
    responseStreaming?: boolean;
    responseTypeUrl?: string;
    syntax?: MethodSyntaxEnum;
}
