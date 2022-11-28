import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Label
/** 
 * A key-value pair applied to a given object.
**/
export class Label extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=numValue" })
  numValue?: string;

  @SpeakeasyMetadata({ data: "json, name=strValue" })
  strValue?: string;
}
