import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Method } from "./method";
import { Mixin } from "./mixin";
import { Option } from "./option";
import { SourceContext } from "./sourcecontext";


export enum ApiSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2",
    SyntaxProto3 = "SYNTAX_PROTO3"
}


// Api
/** 
 * Api is a light-weight descriptor for an API Interface. Interfaces are also described as "protocol buffer services" in some contexts, such as by the "service" keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as "APIs" in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology.
**/
export class Api extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=methods", elemType: Method })
  methods?: Method[];

  @SpeakeasyMetadata({ data: "json, name=mixins", elemType: Mixin })
  mixins?: Mixin[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: Option })
  options?: Option[];

  @SpeakeasyMetadata({ data: "json, name=sourceContext" })
  sourceContext?: SourceContext;

  @SpeakeasyMetadata({ data: "json, name=syntax" })
  syntax?: ApiSyntaxEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
