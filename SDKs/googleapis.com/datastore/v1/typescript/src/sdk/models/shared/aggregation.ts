import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Count } from "./count";



// Aggregation
/** 
 * Defines a aggregation that produces a single result.
**/
export class Aggregation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: Count;
}
