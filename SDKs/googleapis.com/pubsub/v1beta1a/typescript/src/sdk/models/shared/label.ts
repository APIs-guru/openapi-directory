import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Label
/** 
 * A key-value pair applied to a given object.
**/
export class Label extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=numValue" })
  numValue?: string;

  @Metadata({ data: "json, name=strValue" })
  strValue?: string;
}
