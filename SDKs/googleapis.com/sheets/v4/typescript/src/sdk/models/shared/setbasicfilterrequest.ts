import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BasicFilter } from "./basicfilter";


// SetBasicFilterRequest
/** 
 * Sets the basic filter associated with a sheet.
**/
export class SetBasicFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: BasicFilter;
}
