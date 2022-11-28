import { SpeakeasyBase } from "../../../internal/utils";
import { Method } from "./method";
import { Mixin } from "./mixin";
import { Option } from "./option";
import { SourceContext } from "./sourcecontext";
export declare enum ApiSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2",
    SyntaxProto3 = "SYNTAX_PROTO3"
}
/**
 * Api is a light-weight descriptor for an API Interface. Interfaces are also described as "protocol buffer services" in some contexts, such as by the "service" keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as "APIs" in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology.
**/
export declare class Api extends SpeakeasyBase {
    methods?: Method[];
    mixins?: Mixin[];
    name?: string;
    options?: Option[];
    sourceContext?: SourceContext;
    syntax?: ApiSyntaxEnum;
    version?: string;
}
