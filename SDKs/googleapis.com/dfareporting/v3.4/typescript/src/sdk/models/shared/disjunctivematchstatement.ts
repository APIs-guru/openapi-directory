import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";



// DisjunctiveMatchStatement
/** 
 * Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements.
**/
export class DisjunctiveMatchStatement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventFilters", elemType: EventFilter })
  eventFilters?: EventFilter[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
