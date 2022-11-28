import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LabelDescriptorValueTypeEnum {
    String = "STRING",
    Bool = "BOOL",
    Int64 = "INT64"
}


// LabelDescriptor
/** 
 * A description of a label.
**/
export class LabelDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=valueType" })
  valueType?: LabelDescriptorValueTypeEnum;
}
