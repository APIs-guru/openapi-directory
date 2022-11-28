import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobScheduling
/** 
 * Job scheduling options.
**/
export class JobScheduling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxFailuresPerHour" })
  maxFailuresPerHour?: number;

  @SpeakeasyMetadata({ data: "json, name=maxFailuresTotal" })
  maxFailuresTotal?: number;
}
