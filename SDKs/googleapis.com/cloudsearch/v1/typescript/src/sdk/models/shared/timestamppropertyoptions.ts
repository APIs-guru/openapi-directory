import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimestampOperatorOptions } from "./timestampoperatoroptions";



// TimestampPropertyOptions
/** 
 * The options for timestamp properties.
**/
export class TimestampPropertyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorOptions" })
  operatorOptions?: TimestampOperatorOptions;
}
