import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValueValidation
/** 
 * Validation based on a list of allowed values.
**/
export class ValueValidation extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values?: string[];
}
