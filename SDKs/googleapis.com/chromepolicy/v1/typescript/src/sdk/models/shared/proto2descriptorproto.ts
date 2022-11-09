import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Proto2EnumDescriptorProto } from "./proto2enumdescriptorproto";
import { Proto2FieldDescriptorProto } from "./proto2fielddescriptorproto";
import { Proto2DescriptorProto } from "./proto2descriptorproto";
import { Proto2OneofDescriptorProto } from "./proto2oneofdescriptorproto";


// Proto2DescriptorProto
/** 
 * Describes a message type.
**/
export class Proto2DescriptorProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=enumType", elemType: shared.Proto2EnumDescriptorProto })
  enumType?: Proto2EnumDescriptorProto[];

  @Metadata({ data: "json, name=field", elemType: shared.Proto2FieldDescriptorProto })
  field?: Proto2FieldDescriptorProto[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nestedType", elemType: shared.Proto2DescriptorProto })
  nestedType?: Proto2DescriptorProto[];

  @Metadata({ data: "json, name=oneofDecl", elemType: shared.Proto2OneofDescriptorProto })
  oneofDecl?: Proto2OneofDescriptorProto[];
}
