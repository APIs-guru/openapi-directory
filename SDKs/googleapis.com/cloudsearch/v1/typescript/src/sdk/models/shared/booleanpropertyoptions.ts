import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BooleanOperatorOptions } from "./booleanoperatoroptions";



// BooleanPropertyOptions
/** 
 * The options for boolean properties.
**/
export class BooleanPropertyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorOptions" })
  operatorOptions?: BooleanOperatorOptions;
}
