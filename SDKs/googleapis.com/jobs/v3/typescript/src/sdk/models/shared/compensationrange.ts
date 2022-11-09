import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";


// CompensationRange
/** 
 * Compensation range.
**/
export class CompensationRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxCompensation" })
  maxCompensation?: Money;

  @Metadata({ data: "json, name=minCompensation" })
  minCompensation?: Money;
}
