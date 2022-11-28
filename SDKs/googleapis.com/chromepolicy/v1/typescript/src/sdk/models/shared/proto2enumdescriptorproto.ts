import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Proto2EnumValueDescriptorProto } from "./proto2enumvaluedescriptorproto";



// Proto2EnumDescriptorProto
/** 
 * Describes an enum type.
**/
export class Proto2EnumDescriptorProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value", elemType: Proto2EnumValueDescriptorProto })
  value?: Proto2EnumValueDescriptorProto[];
}
