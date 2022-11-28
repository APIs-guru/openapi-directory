import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Timing
/** 
 * Message containing the performance timing data for the Lighthouse run.
**/
export class Timing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
