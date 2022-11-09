import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClassItem
/** 
 * An item of the class.
**/
export class ClassItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
