import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompensationRange } from "./compensationrange";
import { CompensationEntry } from "./compensationentry";



// CompensationInfo
/** 
 * Job compensation details.
**/
export class CompensationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annualizedBaseCompensationRange" })
  annualizedBaseCompensationRange?: CompensationRange;

  @SpeakeasyMetadata({ data: "json, name=annualizedTotalCompensationRange" })
  annualizedTotalCompensationRange?: CompensationRange;

  @SpeakeasyMetadata({ data: "json, name=entries", elemType: CompensationEntry })
  entries?: CompensationEntry[];
}
