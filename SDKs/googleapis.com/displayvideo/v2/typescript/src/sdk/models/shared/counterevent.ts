import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CounterEvent
/** 
 * Counter event of the creative.
**/
export class CounterEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reportingName" })
  reportingName?: string;
}
