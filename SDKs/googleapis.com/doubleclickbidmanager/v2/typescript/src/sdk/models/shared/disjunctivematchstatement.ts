import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventFilter } from "./eventfilter";


// DisjunctiveMatchStatement
/** 
 * DisjunctiveMatchStatement that OR's all contained filters.
**/
export class DisjunctiveMatchStatement extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventFilters", elemType: shared.EventFilter })
  eventFilters?: EventFilter[];
}
