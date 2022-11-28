import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClassItem
/** 
 * An item of the class.
**/
export class ClassItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
