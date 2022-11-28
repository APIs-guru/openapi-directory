import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Advice
/** 
 * Generated advice about this change, used for providing more information about how a change will affect the existing service.
**/
export class Advice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
