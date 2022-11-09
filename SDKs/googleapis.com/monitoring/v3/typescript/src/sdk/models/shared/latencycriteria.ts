import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LatencyCriteria
/** 
 * Parameters for a latency threshold SLI.
**/
export class LatencyCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=threshold" })
  threshold?: string;
}
