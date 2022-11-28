import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnumValue } from "./enumvalue";
import { Option } from "./option";
import { SourceContext } from "./sourcecontext";


export enum EnumSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2",
    SyntaxProto3 = "SYNTAX_PROTO3"
}


// Enum
/** 
 * Enum type definition.
**/
export class Enum extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enumvalue", elemType: EnumValue })
  enumvalue?: EnumValue[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: Option })
  options?: Option[];

  @SpeakeasyMetadata({ data: "json, name=sourceContext" })
  sourceContext?: SourceContext;

  @SpeakeasyMetadata({ data: "json, name=syntax" })
  syntax?: EnumSyntaxEnum;
}
