import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CounterEvent
/** 
 * Counter event of the creative.
**/
export class CounterEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reportingName" })
  reportingName?: string;
}
