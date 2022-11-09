import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimestampOperatorOptions } from "./timestampoperatoroptions";


// TimestampPropertyOptions
/** 
 * The options for timestamp properties.
**/
export class TimestampPropertyOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=operatorOptions" })
  operatorOptions?: TimestampOperatorOptions;
}
