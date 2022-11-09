import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateOperatorOptions } from "./dateoperatoroptions";


// DatePropertyOptions
/** 
 * The options for date properties.
**/
export class DatePropertyOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=operatorOptions" })
  operatorOptions?: DateOperatorOptions;
}
