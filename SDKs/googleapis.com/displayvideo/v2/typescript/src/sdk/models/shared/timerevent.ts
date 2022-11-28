import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimerEvent
/** 
 * Timer event of the creative.
**/
export class TimerEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reportingName" })
  reportingName?: string;
}
