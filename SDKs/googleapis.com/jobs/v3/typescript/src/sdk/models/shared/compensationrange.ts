import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



// CompensationRange
/** 
 * Compensation range.
**/
export class CompensationRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxCompensation" })
  maxCompensation?: Money;

  @SpeakeasyMetadata({ data: "json, name=minCompensation" })
  minCompensation?: Money;
}
