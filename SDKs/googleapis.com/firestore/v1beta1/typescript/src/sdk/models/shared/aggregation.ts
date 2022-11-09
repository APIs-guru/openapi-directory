import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Count } from "./count";


// Aggregation
/** 
 * Defines a aggregation that produces a single result.
**/
export class Aggregation extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=count" })
  count?: Count;
}
