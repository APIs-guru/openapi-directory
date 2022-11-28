import { SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";
/**
 * Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements.
**/
export declare class DisjunctiveMatchStatement extends SpeakeasyBase {
    eventFilters?: EventFilter[];
    kind?: string;
}
