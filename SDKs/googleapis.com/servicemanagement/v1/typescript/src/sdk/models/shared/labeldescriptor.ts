import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LabelDescriptorValueTypeEnum {
    String = "STRING"
,    Bool = "BOOL"
,    Int64 = "INT64"
}


// LabelDescriptor
/** 
 * A description of a label.
**/
export class LabelDescriptor extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=valueType" })
  valueType?: LabelDescriptorValueTypeEnum;
}
