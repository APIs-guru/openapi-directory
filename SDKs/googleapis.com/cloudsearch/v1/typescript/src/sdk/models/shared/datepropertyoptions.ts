import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateOperatorOptions } from "./dateoperatoroptions";



// DatePropertyOptions
/** 
 * The options for date properties.
**/
export class DatePropertyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorOptions" })
  operatorOptions?: DateOperatorOptions;
}
