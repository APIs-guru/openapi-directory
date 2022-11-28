import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
import { Option } from "./option";
import { SourceContext } from "./sourcecontext";


export enum TypeSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2",
    SyntaxProto3 = "SYNTAX_PROTO3"
}


// Type
/** 
 * A protocol buffer message type.
**/
export class Type extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: Field })
  fields?: Field[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oneofs" })
  oneofs?: string[];

  @SpeakeasyMetadata({ data: "json, name=options", elemType: Option })
  options?: Option[];

  @SpeakeasyMetadata({ data: "json, name=sourceContext" })
  sourceContext?: SourceContext;

  @SpeakeasyMetadata({ data: "json, name=syntax" })
  syntax?: TypeSyntaxEnum;
}
