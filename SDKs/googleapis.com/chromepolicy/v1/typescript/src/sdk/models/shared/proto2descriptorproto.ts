import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Proto2EnumDescriptorProto } from "./proto2enumdescriptorproto";
import { Proto2FieldDescriptorProto } from "./proto2fielddescriptorproto";
import { Proto2OneofDescriptorProto } from "./proto2oneofdescriptorproto";



// Proto2DescriptorProto
/** 
 * Describes a message type.
**/
export class Proto2DescriptorProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enumType", elemType: Proto2EnumDescriptorProto })
  enumType?: Proto2EnumDescriptorProto[];

  @SpeakeasyMetadata({ data: "json, name=field", elemType: Proto2FieldDescriptorProto })
  field?: Proto2FieldDescriptorProto[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nestedType", elemType: Proto2DescriptorProto })
  nestedType?: Proto2DescriptorProto[];

  @SpeakeasyMetadata({ data: "json, name=oneofDecl", elemType: Proto2OneofDescriptorProto })
  oneofDecl?: Proto2OneofDescriptorProto[];
}
