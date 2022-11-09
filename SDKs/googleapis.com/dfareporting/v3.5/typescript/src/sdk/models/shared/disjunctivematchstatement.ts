import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventFilter } from "./eventfilter";


// DisjunctiveMatchStatement
/** 
 * Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements.
**/
export class DisjunctiveMatchStatement extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventFilters", elemType: shared.EventFilter })
  eventFilters?: EventFilter[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
