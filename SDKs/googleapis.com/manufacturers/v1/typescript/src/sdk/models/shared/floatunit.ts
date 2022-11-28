import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FloatUnit
/** 
 * Combination of float amount and unit.
**/
export class FloatUnit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;
}
