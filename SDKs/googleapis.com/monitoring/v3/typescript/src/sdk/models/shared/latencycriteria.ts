import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LatencyCriteria
/** 
 * Parameters for a latency threshold SLI.
**/
export class LatencyCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=threshold" })
  threshold?: string;
}
