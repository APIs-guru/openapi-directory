import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TargetsPresentCondition
/** 
 * TargetsPresentCondition contains information on any Targets defined in the Delivery Pipeline that do not actually exist.
**/
export class TargetsPresentCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=missingTargets" })
  missingTargets?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
