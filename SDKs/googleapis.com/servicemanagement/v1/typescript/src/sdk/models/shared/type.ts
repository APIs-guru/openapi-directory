import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Field } from "./field";
import { Option } from "./option";
import { SourceContext } from "./sourcecontext";

export enum TypeSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2"
,    SyntaxProto3 = "SYNTAX_PROTO3"
}


// Type
/** 
 * A protocol buffer message type.
**/
export class Type extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.Field })
  fields?: Field[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=oneofs" })
  oneofs?: string[];

  @Metadata({ data: "json, name=options", elemType: shared.Option })
  options?: Option[];

  @Metadata({ data: "json, name=sourceContext" })
  sourceContext?: SourceContext;

  @Metadata({ data: "json, name=syntax" })
  syntax?: TypeSyntaxEnum;
}
