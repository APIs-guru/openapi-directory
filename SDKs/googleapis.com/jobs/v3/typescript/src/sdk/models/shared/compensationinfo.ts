import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompensationRange } from "./compensationrange";
import { CompensationRange } from "./compensationrange";
import { CompensationEntry } from "./compensationentry";


// CompensationInfo
/** 
 * Job compensation details.
**/
export class CompensationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=annualizedBaseCompensationRange" })
  annualizedBaseCompensationRange?: CompensationRange;

  @Metadata({ data: "json, name=annualizedTotalCompensationRange" })
  annualizedTotalCompensationRange?: CompensationRange;

  @Metadata({ data: "json, name=entries", elemType: shared.CompensationEntry })
  entries?: CompensationEntry[];
}
