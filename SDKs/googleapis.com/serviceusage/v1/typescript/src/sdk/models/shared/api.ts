import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Method } from "./method";
import { Mixin } from "./mixin";
import { Option } from "./option";
import { SourceContext } from "./sourcecontext";

export enum ApiSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2"
,    SyntaxProto3 = "SYNTAX_PROTO3"
}


// Api
/** 
 * Api is a light-weight descriptor for an API Interface. Interfaces are also described as "protocol buffer services" in some contexts, such as by the "service" keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as "APIs" in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology.
**/
export class Api extends SpeakeasyBase {
  @Metadata({ data: "json, name=methods", elemType: shared.Method })
  methods?: Method[];

  @Metadata({ data: "json, name=mixins", elemType: shared.Mixin })
  mixins?: Mixin[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=options", elemType: shared.Option })
  options?: Option[];

  @Metadata({ data: "json, name=sourceContext" })
  sourceContext?: SourceContext;

  @Metadata({ data: "json, name=syntax" })
  syntax?: ApiSyntaxEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
