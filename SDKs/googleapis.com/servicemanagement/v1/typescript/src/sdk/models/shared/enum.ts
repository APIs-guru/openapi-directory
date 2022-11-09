import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnumValue } from "./enumvalue";
import { Option } from "./option";
import { SourceContext } from "./sourcecontext";

export enum EnumSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2"
,    SyntaxProto3 = "SYNTAX_PROTO3"
}


// Enum
/** 
 * Enum type definition.
**/
export class Enum extends SpeakeasyBase {
  @Metadata({ data: "json, name=enumvalue", elemType: shared.EnumValue })
  enumvalue?: EnumValue[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=options", elemType: shared.Option })
  options?: Option[];

  @Metadata({ data: "json, name=sourceContext" })
  sourceContext?: SourceContext;

  @Metadata({ data: "json, name=syntax" })
  syntax?: EnumSyntaxEnum;
}
