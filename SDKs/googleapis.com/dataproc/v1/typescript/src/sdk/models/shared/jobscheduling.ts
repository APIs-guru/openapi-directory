import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobScheduling
/** 
 * Job scheduling options.
**/
export class JobScheduling extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxFailuresPerHour" })
  maxFailuresPerHour?: number;

  @Metadata({ data: "json, name=maxFailuresTotal" })
  maxFailuresTotal?: number;
}
