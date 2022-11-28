import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Proto2EnumDescriptorProto } from "./proto2enumdescriptorproto";
import { Proto2DescriptorProto } from "./proto2descriptorproto";



// Proto2FileDescriptorProto
/** 
 * Describes a complete .proto file.
**/
export class Proto2FileDescriptorProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enumType", elemType: Proto2EnumDescriptorProto })
  enumType?: Proto2EnumDescriptorProto[];

  @SpeakeasyMetadata({ data: "json, name=messageType", elemType: Proto2DescriptorProto })
  messageType?: Proto2DescriptorProto[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=package" })
  package?: string;

  @SpeakeasyMetadata({ data: "json, name=syntax" })
  syntax?: string;
}
