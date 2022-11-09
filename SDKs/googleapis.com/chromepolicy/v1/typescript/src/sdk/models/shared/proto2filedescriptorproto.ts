import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Proto2EnumDescriptorProto } from "./proto2enumdescriptorproto";
import { Proto2DescriptorProto } from "./proto2descriptorproto";


// Proto2FileDescriptorProto
/** 
 * Describes a complete .proto file.
**/
export class Proto2FileDescriptorProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=enumType", elemType: shared.Proto2EnumDescriptorProto })
  enumType?: Proto2EnumDescriptorProto[];

  @Metadata({ data: "json, name=messageType", elemType: shared.Proto2DescriptorProto })
  messageType?: Proto2DescriptorProto[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=package" })
  package?: string;

  @Metadata({ data: "json, name=syntax" })
  syntax?: string;
}
