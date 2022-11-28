import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SchedulePolicy
/** 
 * A policy for scheduling replications.
**/
export class SchedulePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idleDuration" })
  idleDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=skipOsAdaptation" })
  skipOsAdaptation?: boolean;
}
