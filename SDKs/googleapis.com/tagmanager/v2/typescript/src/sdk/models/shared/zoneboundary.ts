import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Condition } from "./condition";


// ZoneBoundary
/** 
 * Represents a Zone's boundaries.
**/
export class ZoneBoundary extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition", elemType: shared.Condition })
  condition?: Condition[];

  @Metadata({ data: "json, name=customEvaluationTriggerId" })
  customEvaluationTriggerId?: string[];
}
