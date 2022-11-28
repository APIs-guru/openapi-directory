import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Date
/** 
 * Wrapper for Date Field value.
**/
export class Date extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
