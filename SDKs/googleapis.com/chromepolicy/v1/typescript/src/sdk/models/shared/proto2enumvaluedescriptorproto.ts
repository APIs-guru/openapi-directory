import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Proto2EnumValueDescriptorProto
/** 
 * Describes a value within an enum.
**/
export class Proto2EnumValueDescriptorProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number" })
  number?: number;
}
