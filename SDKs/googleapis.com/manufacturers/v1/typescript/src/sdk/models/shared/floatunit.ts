import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FloatUnit
/** 
 * Combination of float amount and unit.
**/
export class FloatUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=unit" })
  unit?: string;
}
