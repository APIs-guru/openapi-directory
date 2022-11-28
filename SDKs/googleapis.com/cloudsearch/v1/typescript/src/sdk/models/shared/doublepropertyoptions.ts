import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DoubleOperatorOptions } from "./doubleoperatoroptions";



// DoublePropertyOptions
/** 
 * The options for double properties.
**/
export class DoublePropertyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorOptions" })
  operatorOptions?: DoubleOperatorOptions;
}
