import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Timing
/** 
 * Message containing the performance timing data for the Lighthouse run.
**/
export class Timing extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total?: number;
}
