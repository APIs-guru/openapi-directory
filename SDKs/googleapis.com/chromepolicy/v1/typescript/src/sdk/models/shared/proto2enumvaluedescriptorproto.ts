import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Proto2EnumValueDescriptorProto
/** 
 * Describes a value within an enum.
**/
export class Proto2EnumValueDescriptorProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;
}
