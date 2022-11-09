import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimerEvent
/** 
 * Timer event of the creative.
**/
export class TimerEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reportingName" })
  reportingName?: string;
}
