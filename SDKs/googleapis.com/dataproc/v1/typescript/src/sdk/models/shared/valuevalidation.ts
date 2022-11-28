import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValueValidation
/** 
 * Validation based on a list of allowed values.
**/
export class ValueValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
