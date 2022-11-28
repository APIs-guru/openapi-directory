import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";



// DisjunctiveMatchStatement
/** 
 * DisjunctiveMatchStatement that OR's all contained filters.
**/
export class DisjunctiveMatchStatement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventFilters", elemType: EventFilter })
  eventFilters?: EventFilter[];
}
