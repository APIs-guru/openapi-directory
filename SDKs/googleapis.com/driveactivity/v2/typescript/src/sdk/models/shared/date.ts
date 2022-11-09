import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Date
/** 
 * Wrapper for Date Field value.
**/
export class Date extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
