import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BooleanOperatorOptions } from "./booleanoperatoroptions";


// BooleanPropertyOptions
/** 
 * The options for boolean properties.
**/
export class BooleanPropertyOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=operatorOptions" })
  operatorOptions?: BooleanOperatorOptions;
}
