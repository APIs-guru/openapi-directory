import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TargetsPresentCondition
/** 
 * TargetsPresentCondition contains information on any Targets defined in the Delivery Pipeline that do not actually exist.
**/
export class TargetsPresentCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=missingTargets" })
  missingTargets?: string[];

  @Metadata({ data: "json, name=status" })
  status?: boolean;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
