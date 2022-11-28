import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";



// ZoneBoundary
/** 
 * Represents a Zone's boundaries.
**/
export class ZoneBoundary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition", elemType: Condition })
  condition?: Condition[];

  @SpeakeasyMetadata({ data: "json, name=customEvaluationTriggerId" })
  customEvaluationTriggerId?: string[];
}
