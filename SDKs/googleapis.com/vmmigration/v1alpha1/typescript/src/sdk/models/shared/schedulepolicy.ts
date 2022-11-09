import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SchedulePolicy
/** 
 * A policy for scheduling replications.
**/
export class SchedulePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=idleDuration" })
  idleDuration?: string;

  @Metadata({ data: "json, name=skipOsAdaptation" })
  skipOsAdaptation?: boolean;
}
