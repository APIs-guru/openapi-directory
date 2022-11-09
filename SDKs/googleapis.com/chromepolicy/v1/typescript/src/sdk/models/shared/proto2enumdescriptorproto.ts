import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Proto2EnumValueDescriptorProto } from "./proto2enumvaluedescriptorproto";


// Proto2EnumDescriptorProto
/** 
 * Describes an enum type.
**/
export class Proto2EnumDescriptorProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value", elemType: shared.Proto2EnumValueDescriptorProto })
  value?: Proto2EnumValueDescriptorProto[];
}
