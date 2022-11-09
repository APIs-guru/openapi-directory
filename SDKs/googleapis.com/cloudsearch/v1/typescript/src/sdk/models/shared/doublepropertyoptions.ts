import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DoubleOperatorOptions } from "./doubleoperatoroptions";


// DoublePropertyOptions
/** 
 * The options for double properties.
**/
export class DoublePropertyOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=operatorOptions" })
  operatorOptions?: DoubleOperatorOptions;
}
