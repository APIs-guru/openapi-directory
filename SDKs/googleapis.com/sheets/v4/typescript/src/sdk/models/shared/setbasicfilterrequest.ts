import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasicFilter } from "./basicfilter";



// SetBasicFilterRequest
/** 
 * Sets the basic filter associated with a sheet.
**/
export class SetBasicFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: BasicFilter;
}
